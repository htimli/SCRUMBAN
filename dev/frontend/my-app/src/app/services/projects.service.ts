import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects : any[] = [];
  projectsSubject = new Subject<any[]>();;

  constructor(private httpClient : HttpClient ) { }

  getSavedProjects(){
    this.httpClient
    .get<any[]>('http://localhost:5000/api/projects/all')
    .subscribe(
      (response: any) =>{
        console.log(response.data);
        this.projects = response.data;
        this.projectsSubject.next(this.projects);
      }  );   
  }
  

}

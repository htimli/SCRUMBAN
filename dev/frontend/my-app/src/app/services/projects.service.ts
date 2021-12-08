import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects: any[] = [];
  projectsSubject = new Subject<any[]>();

  currentProject: any;

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getSavedProjects() {
    this.httpClient
      .get<any[]>('http://localhost:5000/api/projects/all/' + this.authService.getcurrentUserId())
      .subscribe(
        (response: any) => {
          console.log(response.data);
          this.projects = response.data;
          this.projectsSubject.next(this.projects);
        });
  }

  saveProject(projectData: any) {
    this.httpClient.post('http://localhost:5000/api/projects/add', projectData).subscribe(
      data => { console.log(data); }
    );
  }

  actualizeCurrentProject(id) {
      return new Promise(
        (resolve,rejected) => {
        this.httpClient.get<any>('http://localhost:5000/api/projects/' + id).subscribe(
          (response: any) => {
            resolve(true);
            this.currentProject = response.data;
          },
          error => {rejected(true);} 
        );
  }
      );
  }
}
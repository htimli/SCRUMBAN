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

  getProjectSprints(s :any,idProject:string){
    this.httpClient
      .get<any[]>('http://localhost:5000/api/sprints/project/'+idProject)
      .subscribe(
        (response: any) => {
          console.log(response.data);
          s.sprints = response.data;

        });
  }

  addProjectSprint(s :any, idProject:string, sprintData :any){
    return new Promise(
      (resolve, rejected) => {
    this.httpClient
      .post('http://localhost:5000/api/sprints/project/add/'+idProject , sprintData)
      .subscribe(
        (response: any) => {
          console.log(response.data);
          s.sprints.push(response.data);
          resolve(true);
        },
        error => {rejected(true);}
        );
      }
    );

  }

  getProjectMembers(s: any, idProject:string){
  this.httpClient
      .get<any[]>('http://localhost:5000/api/projects/users/'+idProject)
      .subscribe(
        (response: any) => {
          console.log(response.data + "salut");
          s.sprints = response.data;
        }
      );
    }

  addProjectUser(s:any, idProject:string, memberEmail:string){
  return new Promise(
    (resolve, rejected) => {
  this.httpClient
    .post('http://localhost:5000/api/project/addUser/'+idProject , memberEmail)
    .subscribe(
      (response: any) => {
        console.log(response.data);
        s.sprints.push(response.data);
        resolve(true);
      },
      error => {rejected(true);}
      );
    }
  );

  }
}



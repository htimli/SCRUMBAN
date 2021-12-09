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

  getProjectSprints(project :any, idProject:string){
    this.httpClient
      .get<any[]>('http://localhost:5000/api/sprints/project/'+idProject)
      .subscribe(
        (response: any) => {
          console.log(response.data);
          project.sprints = response.data;

        });
  }

  addProjectSprint(project :any, sprintData :any){
    return new Promise(
      (resolve, rejected) => {
    this.httpClient
      .post('http://localhost:5000/api/sprints/project/add/'+project._id, sprintData)
      .subscribe(
          (response: any) => {
          console.log(response.data);
          project.sprints.push(response.data);
          resolve(true);
          },
          error => {rejected(true);}
        );
      }
    );

  }

  getProjectMembers(p: any, idProject:string){
  this.httpClient
      .get<any[]>('http://localhost:5000/api/projects/users/'+idProject)
      .subscribe(
        (response: any) => {
          console.log(response.data + "salut");
          p.members = response.data;
        }
      );
    }

  getProjectTasks(project :any,idProject:string){
    this.httpClient
      .get<any[]>('http://localhost:5000/api/tasks/project/'+idProject)
      .subscribe(
        (response: any) => {
          console.log('response.data',response.data);
          project.tasks = response.data;

        });

  }

  addProjectTask(b: any, taskData :any ){
    return new Promise(
      (resolve ,rejected) => {
        this.httpClient
        .post('http://localhost:5000/api/tasks/project/add/'+b._id,taskData)
        .subscribe(
            (response: any) => {
            console.log(response.data);
            b.tasks.push(response.data);
            resolve(true);
            },
            error => {rejected(true);}
          );
        }
        );
  }
  getSprintTasks(sprint :any,idSprint:string){
    this.httpClient
      .get<any[]>('http://localhost:5000/api/sprints/'+idSprint+'/tasks')
      .subscribe(
        (response: any) => {
          console.log('response.data',response.data);
          sprint.tasks = response.data;

        });

  }

  addProjectUser(s:any, idProject:string, memberData:any){
  return new Promise(
    (resolve, rejected) => {
  this.httpClient
    .post('http://localhost:5000/api/projects/addUser/'+idProject,memberData)
    .subscribe(
      (response: any) => {
        console.log(response.data);
        s.members.push(response.data);
        resolve(true);
      },
      error => {rejected(true);}
      );
    }
  );

  }
}



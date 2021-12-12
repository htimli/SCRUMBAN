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

  currentProject: any = {};

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getSavedProjects() {
    this.httpClient
      .get<any[]>('http://localhost:5000/api/projects/all/' + this.authService.getcurrentUserId())
      .subscribe(
        (response: any) => {
          this.projects = response.data;
          this.projectsSubject.next(this.projects);
        });
  }

  saveProject(projectData: any) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient.post('http://localhost:5000/api/projects/add', projectData).subscribe(
          (response: any) => {
            console.log(response.data);
            this.currentProject = response.data;
            this.actualizeCurrentProject(this.currentProject._id);
            resolve(true);
          },
          error => { rejected(true); } 
        );
      }
    );
  }

  actualizeCurrentProject(id) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient.get<any>('http://localhost:5000/api/projects/' + id).subscribe(
          (response: any) => {
            this.currentProject = response.data;
            resolve(true);
          },
          error => { rejected(true); }
        );
      }
    );
  }

  getProjectSprints(project: any, idProject: string) {
    this.httpClient
      .get<any[]>('http://localhost:5000/api/sprints/project/' + idProject)
      .subscribe(
        (response: any) => {
          console.log(response.data);
          project.sprints = response.data;

        });
  }

  getProjectSprint(sprint: any, idSprint: string) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient
          .get<any[]>('http://localhost:5000/api/sprints/sprint/' + idSprint)
          .subscribe(
            (response: any) => {
              console.log(response.data);
              sprint.currentSprint = response.data;
              resolve(true);
            },
            error => { rejected(true); }
          );
      });
  }

  getTask(task: any, idTask: string) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient
          .get<any[]>('http://localhost:5000/api/tasks/task/' + idTask)
          .subscribe(
            (response: any) => {
              console.log(response.data);
              task.currentTask = response.data;
              resolve(true);
            },
            error => { rejected(true); }
          );
      });
  }

  addProjectSprint(project: any, sprintData: any) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient
          .post('http://localhost:5000/api/sprints/project/add/' + project._id, sprintData)
          .subscribe(
            (response: any) => {
              console.log(response.data);
              project.sprints.push(response.data);
              resolve(true);
            },
            error => { rejected(true); }
          );
      }
    );

  }

  getProjectMembers(p: any, idProject: string) {
    this.httpClient
      .get<any[]>('http://localhost:5000/api/projects/users/' + idProject)
      .subscribe(
        (response: any) => {
          console.log(response.data);
          p.members = response.data;
        }
      );
  }

  getProjectTasks(project: any, idProject: string) {
    this.httpClient
      .get<any[]>('http://localhost:5000/api/tasks/project/' + idProject)
      .subscribe(
        (response: any) => {
          console.log('response.data', response.data);
          project.tasks = response.data;

        });

  }

  addProjectTask(b: any, taskData: any) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient
          .post('http://localhost:5000/api/tasks/project/add/' + b._id, taskData)
          .subscribe(
            (response: any) => {
              console.log(response.data);
              b.tasks.push(response.data);

              resolve(true);
            },
            error => { rejected(true); }
          );
      }
    );
  }

  removeProjectTask(b: any, idProject: string, taskData: any) {
    
    return new Promise(
      (resolve, rejected) => {
        this.httpClient
          .post('http://localhost:5000/api/tasks/project/remove/' + idProject, taskData)
          .subscribe(
            (response: any) => {
              console.log(response.data);
              b.tasks.pop(response.data);

              resolve(true);
            },
            error => { rejected(true); }
          );
      }
    );
  }

  getSprintTasks(sprint: any, idSprint: string) {
    this.httpClient
      .get<any[]>('http://localhost:5000/api/sprints/' + idSprint + '/tasks')
      .subscribe(
        (response: any) => {
          console.log('response.data', response.data);
          sprint.tasks = response.data;

        });

  }

  addProjectUser(s: any, idProject: string, memberData: any) {

    return new Promise(
      (resolve, rejected) => {
        this.httpClient
          .post('http://localhost:5000/api/projects/addUser/' + idProject, memberData)
          .subscribe(
            (response: any) => {
              console.log(response.data);
              s.members.push(response.data);
              resolve(true);
            },
            error => { rejected(true); }
          );
      }
    );

  }

  removeProjectUser(s: any, idProject: string, memberData: any) {

    return new Promise(
      (resolve, rejected) => {
        this.httpClient
          .post('http://localhost:5000/api/projects/removeUser/' + idProject, memberData)
          .subscribe(
            (response: any) => {
              console.log(response.data);
              s.members.pop(response.data);
              resolve(true);
            },
            error => { rejected(true); }
          );
      }
    );
  }
}



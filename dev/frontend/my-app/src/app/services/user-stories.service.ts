import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProjectsService } from './projects.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserStoriesService {

  taskGroups: any[] = [
    {
      title: "A faire",
      id: "init",
      tasks: []
    },
    {
      title: "En cours",
      id: "inProgress",
      tasks: []
    },
    {
      title: "A tester",
      id: "toTest",
      tasks: []
    },
    {
      title: "Terminé",
      id: "done",
      tasks: []
    }
  ];

  taskGroupsSubject = new Subject<any[]>();

  tasksArray: Array<{ id: number, title: string, description: string }>;

  currentTask: any;

  constructor(private projectService: ProjectsService, private httpClient: HttpClient) { }

  emitTaskGroups() {
    this.taskGroupsSubject.next(this.taskGroups);
  }

  clearGroups() {
    this.taskGroups.forEach(group => {
      group.tasks = [];
    });
  }

  updateTaskGroups(sprint: any) {
    this.clearGroups();
    sprint.tasks.forEach(idTask => {
      this.projectService.getTask(this, idTask).then(() => {
        this.taskGroups.find(group => group.title === this.currentTask.state).tasks.push({
          id: this.currentTask._id,
          title: this.currentTask.title,
          description: this.currentTask.desc
        });
      });
    });

  }

  updateTaskState(taskId: string,state: string) {
    console.log(state);
    console.log(taskId);    
    
    this.httpClient.get('http://localhost:5000/api/tasks/update/' + taskId + "/" + state).subscribe(
      (response: any) => {
        console.log(response.data);
        
      }
    );
  }


}

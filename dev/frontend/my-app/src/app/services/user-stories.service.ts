import { Injectable } from '@angular/core';
import { find, Subject } from 'rxjs';
import { ProjectsService } from './projects.service';

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
      tasks: [
        {
          id: 0,
          title: "US4",
          description: "En tant qu'utilisateur, je souhaite avoir une liste de projet afin de de pouvoir rejoindre un projet en cours"
        },
      ]
    }
  ];

  taskGroupsSubject = new Subject<any[]>();

  tasksArray: Array<{ id: number, title: string, description: string }>;

  constructor(private projectService: ProjectsService) { }

  emitTaskGroups() {
    this.taskGroupsSubject.next(this.taskGroups);
  }

  updateTaskGroups(sprint: any) {
    let id = 0;
    let task: any;
    sprint.tasks.forEach(idTask => {
      this.projectService.getTask(this, idTask).then(() => {
        this.taskGroups.find(group => group.id === task.state).tasks.push({
          id: id,
          title: task.title,
          description: task.description
        });
        id++;
      });
    });

  }



}

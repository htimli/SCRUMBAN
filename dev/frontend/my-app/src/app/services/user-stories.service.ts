import { Injectable } from '@angular/core';
import { find, Subject } from 'rxjs';
import { ProjectsService } from './projects.service';

@Injectable({
  providedIn: 'root',
})
export class UserStoriesService {
  taskGroups: any[] = [
    {
      title: 'A faire',
      id: 'init',
      tasks: [],
    },
    {
      title: 'En cours',
      id: 'inProgress',
      tasks: [],
    },
    {
      title: 'A tester',
      id: 'toTest',
      tasks: [],
    },
    {
      title: 'Terminé',
      id: 'done',
      tasks: [],
    },
  ];

  taskGroupsSubject = new Subject<any[]>();

  tasksArray: Array<{ id: number; title: string; description: string }>;

  currentTask: any;

  constructor(private projectService: ProjectsService) {}

  emitTaskGroups() {
    this.taskGroupsSubject.next(this.taskGroups);
  }

  clearGroups() {
    this.taskGroups.forEach((group) => {
      group.tasks = [];
    });
  }

  updateTaskGroups(sprint: any) {
    this.clearGroups();
    let id = 0;
    sprint.tasks.forEach((idTask) => {
      this.projectService.getTask(this, idTask).then(() => {
        this.taskGroups
          .find((group) => group.title === this.currentTask.state)
          .tasks.push({
            id: id,
            title: this.currentTask.title,
            description: this.currentTask.desc,
          });
        id++;
      });
    });
  }
}

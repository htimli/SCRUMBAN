import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoriesService {

  taskGroups: any[] = [
    {
      title: "A faire",
      id: "todo",
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

  constructor() { }

  emitTaskGroups() {
    this.taskGroupsSubject.next(this.taskGroups);
  }
}

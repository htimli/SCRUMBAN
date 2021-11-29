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
      tasks: [
        {
          id: 0,
          title: "US1",
          description: "En tant qu'utilisateur, je souhaite avoir une page d'accueil afin de d'avoir la présentation du logiciel."
        }   
      ]
    },
    {
      title: "En cours",
      id: "inProgress",
      tasks: [
        {
          id: 0,
          title: "US0",
          description: "En tant qu'utilisateur, je souhaite pouvoir me connecter afin de de récupérer mes projets en cours, modifier ou supprimer ."
        }
      ]
    },
    {
      title: "Bloqué",
      id: "inProgress",
      tasks: [
        {
          id: 0,
          title: "US1",
          description: "En tant qu'utilisateur, je souhaite avoir m'inscrire afin de de pouvoir céer de nouveaux projets"
        }
      ]
    },
    {
      title: "A tester",
      id: "inProgress",
      tasks: [
        {
          id: 2,
          title: "US2",
          description: "Voir la recette de la quiche"
        }
      ]
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

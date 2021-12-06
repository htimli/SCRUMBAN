import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ProjectsService } from '../services/projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrls: ['./projects-list-page.component.css']
})
export class ProjectsListPageComponent implements OnInit {

  /*
  projects = [
    {
      id : 0 ,
      name: 'projet 1',
      scrumMaster : 'zozo',
      participants : [ 'tata','toto','zozo','roro'],
      avancement : 0.2,
      creationDate: new Date()
    },
    {
      id : 1 ,
      name: 'projet 2',
      scrumMaster : 'momo',
      participants : [ 'momo','foto','lolo'],
      avancement : 0.50,
      creationDate: new Date()
    },
    {
      id : 2 ,
      name: 'projet 3',
      scrumMaster : 'fafa',
      participants : [ 'como','fafa'],
      avancement : 1,
      creationDate: new Date()
    }
  ];
  */
  projects : any[] = [];
  projectsSubscription : Subscription;


  constructor(private router : Router, private httpClient : HttpClient , private projectServices : ProjectsService  ) { }

  ngOnInit(): void {
    this.projectsSubscription = this.projectServices.projectsSubject.subscribe(
      (projects)=>{
        this.projects = projects;
      }
    )
    this.projectServices.getSavedProjects();    
  }

  

  onNewProject(){
    this.projectServices.getSavedProjects();
    this.router.navigate(["newProject"]);  
  }
  

}

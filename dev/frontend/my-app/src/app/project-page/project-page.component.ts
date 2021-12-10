import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsService } from '../services/projects.service';
import { SprintsListComponent } from '../sprints-list/sprints-list.component';

 
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  @ViewChild(SprintsListComponent,{static : true})hijo :SprintsListComponent


  project : any = {};
  sprintToShow : number; 

  constructor(private router: Router, private projectService : ProjectsService ) { 
   }

  ngOnInit(): void { 
    this.project = this.projectService.currentProject;
    this.sprintToShow = this.hijo.getSprintSelected();
   }

  onNewTask(){
   this.router.navigate(['newTask'])

   
   console.log(this.sprintToShow);
  }
  getSprintToShow(){
    return this.hijo.getSprintSelected();

  }







  

}

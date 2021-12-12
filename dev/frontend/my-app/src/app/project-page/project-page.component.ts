import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsService } from '../services/projects.service';
import { UserStoriesService } from '../services/user-stories.service';
import { SprintsListComponent } from '../sprints-list/sprints-list.component';

 
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  @ViewChild(SprintsListComponent,{static : true})hijo :SprintsListComponent


  project : any = {};
  sprintToShow : string;
  currentSprint : any = {};

  constructor(private router: Router, private projectService : ProjectsService, private userStorieService : UserStoriesService) { 
   }

  ngOnInit(): void { 
    this.project = this.projectService.currentProject;
   }

  onNewTask(){
   this.router.navigate(['newTask']);
  }

  getSprintToShow(){
    this.sprintToShow = this.hijo.getSprintSelected();
    this.projectService.getProjectSprint(this,this.sprintToShow).then(() => {this.userStorieService.updateTaskGroups(this.currentSprint);});
  }







  

}

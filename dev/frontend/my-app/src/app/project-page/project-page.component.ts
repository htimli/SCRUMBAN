import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { ProductBacklogComponent } from '../product-backlog/product-backlog.component';

import { ProjectsService } from '../services/projects.service';
import { UserStoriesService } from '../services/user-stories.service';
import { SprintsListComponent } from '../sprints-list/sprints-list.component';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  @ViewChild(SprintsListComponent, { static: true }) hijo: SprintsListComponent;
  @ViewChild(ProductBacklogComponent, { static: true }) hijoBackLog: ProductBacklogComponent;


  
  project: any = {};
  sprintToShow: string;
  currentSprint: any = {};
  tasks: any[] = [];

  constructor(private router: Router, private projectService: ProjectsService, private userStorieService: UserStoriesService) {
  }

  ngOnInit(): void {
    this.project = this.projectService.currentProject;
    this.projectService.getProjectTasks(this, this.project._id);
  }

  updateAvancement(){
    let finishedTasks = 0;
    this.tasks.forEach(task => {
      if(task.state === 'Terminé'){
        finishedTasks++;
      }
    });
    return (finishedTasks/this.tasks.length)*100;
  }

  getSprintToShow() {
    this.sprintToShow = this.hijo.getSprintSelected();
    this.projectService.getProjectSprint(this, this.sprintToShow).then(() => { this.userStorieService.updateTaskGroups(this.currentSprint); });
  }

  onBackToProjects() {
    this.router.navigate(['/projects']);
  }









}

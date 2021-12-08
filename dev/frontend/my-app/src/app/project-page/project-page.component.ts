import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { ProjectsService } from '../services/projects.service';

 
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {


  project : any;
  projectSubscription : Subscription;

  constructor(private router: Router, private projectService : ProjectsService ) {  }

  ngOnInit(): void {
    this.projectSubscription = this.projectService.projectsSubject.subscribe(
      (project ) => { this.project = project;}
    );
     console.log("=====>" ,this.projectService.currentProject);
     this.project = this.projectService.currentProject;
     console.log(this.project);
  }

  onNewTask(){
    this.router.navigate(['newTask'])
  }

}

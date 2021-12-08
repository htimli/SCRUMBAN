import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsService } from '../services/projects.service';

 
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {


  project : any = {};

  constructor(private router: Router, private projectService : ProjectsService ) { 
   }

  ngOnInit(): void { 
    this.project = this.projectService.currentProject;
   }

}

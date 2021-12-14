import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ProjectsService } from '../services/projects.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrls: ['./projects-list-page.component.css']
})
export class ProjectsListPageComponent implements OnInit {

  projects : any[];
  scrumMasters: any = {};
  projectsSubscription : Subscription;
  user : '';

  projectId: String;

  constructor(private router : Router, private httpClient : HttpClient , private projectServices : ProjectsService, private authService: AuthService ) { }

  ngOnInit(): void {
    this.projectsSubscription = this.projectServices.projectsSubject.subscribe(
      (projects)=>{
        this.projects = projects;
      }
    );
    
    this.projectServices.getSavedProjects().then(() => { 
  });
  
  }

  onNewProject(){
    this.projectServices.getSavedProjects();
    this.router.navigate(["newProject"]);  
  }

  onActualizeCurrentProject(id){
    this.projectServices.actualizeCurrentProject(id).then(() => {this.router.navigate(['project']);});
  }

  onRemoveProject(id){
    this.projectServices.removeProject(this,id,{id: this.authService.getcurrentUserId()});
  }
}

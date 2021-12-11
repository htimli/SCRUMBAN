import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductBacklogComponent } from '../product-backlog/product-backlog.component';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent implements OnInit {

  
  projectId :'';

  

  sprintData = {
    name : '',
    tasks : []
  }
  
  

  
  
  @ViewChild(ProductBacklogComponent, {static :true}) hijo : ProductBacklogComponent 


  constructor(private router: Router ,private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.projectId = this.projectService.currentProject._id;
  }


  onAdd(){
    this.sprintData.tasks.push(this.hijo.getTaskSelected());
  }


  onNewSprint(form:NgForm) {
  this.sprintData.name = form.value.SprintName;
  
  console.log('this.sprintData',this.sprintData);

  this.projectService.addProjectSprint(this.projectService.currentProject,this.sprintData)
  .then(
    () => {this.router.navigate(['project'])},
    () => {console.log("err");}
  );
  
  }

  


  

}

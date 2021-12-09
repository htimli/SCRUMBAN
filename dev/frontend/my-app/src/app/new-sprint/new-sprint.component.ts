import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent implements OnInit {

  
  projectId :'';

  tasks = [0, 1, 2, 3];

  sprintData = {
    name : '',
  }

  constructor(private router: Router ,private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.projectId = this.projectService.currentProject._id;
  }

  onSubmit(form: NgForm) {
    
  }

  onNewSprint(form:NgForm) {
  this.sprintData.name = form.value.SprintName;

  this.projectService.addProjectSprint(this.projectService.currentProject,this.sprintData)
  .then(
    () => {this.router.navigate(['project'])},
    () => {console.log("err");}
  );
  }

  


  

}

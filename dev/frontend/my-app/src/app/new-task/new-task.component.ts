import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { ProjectsService } from '../services/projects.service';
>>>>>>> bf666bbd5e737941f355c022fd4c60f030cf6151

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router: Router) { }
=======
  taskData = {
    title : '',
    desc  : ''
  }

  constructor(private router: Router ,private projectService : ProjectsService) { }
>>>>>>> bf666bbd5e737941f355c022fd4c60f030cf6151

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

  }

<<<<<<< HEAD
  onNewTask(){
    this.router.navigate(['project'])
=======
  onNewTask(form:NgForm){

    this.taskData.title = form.value.TaskName;
    this.taskData.desc = form.value.TaskDesc;

    this.projectService.addProjectTask(this.projectService.currentProject,this.taskData)
    .then(
      () => {this.router.navigate(['project'])},
      () => {console.log("err");}
    );


    
>>>>>>> bf666bbd5e737941f355c022fd4c60f030cf6151
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  taskData = {
    title: '',
    desc: '',
  };

  constructor(
    private router: Router,
    private projectService: ProjectsService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {}

  onNewTask(form: NgForm) {
    this.taskData.title = form.value.TaskName;
    this.taskData.desc = form.value.TaskDesc;

    this.projectService
      .addProjectTask(this.projectService.currentProject, this.taskData)
      .then(
        () => {
          this.router.navigate(['project']);
        },
        () => {
          console.log('err');
        }
      );
  }
}

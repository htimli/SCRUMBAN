import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent implements OnInit {

  tasks = [0, 1, 2, 3];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

  }

  onNewSprint() {
    this.router.navigate(['project'])
  }

}

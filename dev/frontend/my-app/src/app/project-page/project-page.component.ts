import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  title: string;

  constructor(private router: Router ) { this.title = 'Title'; }

  ngOnInit(): void {
  }

  onNewTask(){
    this.router.navigate(['newTask'])
  }

}

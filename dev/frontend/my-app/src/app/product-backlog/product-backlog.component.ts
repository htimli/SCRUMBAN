import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-backlog',
  templateUrl: './product-backlog.component.html',
  styleUrls: ['./product-backlog.component.css']
})
export class ProductBacklogComponent implements OnInit {


  tasks = [0,1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

  onNewTask(){}

}

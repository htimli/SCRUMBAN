import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprints-list',
  templateUrl: './sprints-list.component.html',
  styleUrls: ['./sprints-list.component.css']
})
export class SprintsListComponent implements OnInit {




  sprints = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
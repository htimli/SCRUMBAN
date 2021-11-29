import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrls: ['./projects-list-page.component.css']
})
export class ProjectsListPageComponent implements OnInit {


  projects = [
    {
      id : 0 ,
      name: 'projet 1',
      participants : [ 'tata','toto','zozo'],
      creationDate: new Date()
    },
    {
      id : 1 ,
      name: 'projet 2',
      participants : [ 'momo','foto'],
      creationDate: new Date()
    },
    {
      id : 2 ,
      name: 'projet 3',
      participants : [ 'como','fafa'],
      creationDate: new Date()
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrls: ['./projects-list-page.component.css']
})
export class ProjectsListPageComponent implements OnInit {

  /*
  projects = [
    {
      id : 0 ,
      name: 'projet 1',
      scrumMaster : 'zozo',
      participants : [ 'tata','toto','zozo','roro'],
      avancement : 0.2,
      creationDate: new Date()
    },
    {
      id : 1 ,
      name: 'projet 2',
      scrumMaster : 'momo',
      participants : [ 'momo','foto','lolo'],
      avancement : 0.50,
      creationDate: new Date()
    },
    {
      id : 2 ,
      name: 'projet 3',
      scrumMaster : 'fafa',
      participants : [ 'como','fafa'],
      avancement : 1,
      creationDate: new Date()
    }
  ];
  */
  projects : any[];


  constructor(private router : Router, private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  onNewProject(){
    //this.router.navigate(["newProject"]);
    this.getsavedProjects();
  }

  getsavedProjects(){
    this.httpClient
    .get<any[]>('http://localhost:5000/api/projects/all').subscribe(d => {
      console.log(d);
      
      
      //data.forEach(val => this.projects.push(Object.assign({}, val)));
      console.log(this.projects);
    
    });
  }

}

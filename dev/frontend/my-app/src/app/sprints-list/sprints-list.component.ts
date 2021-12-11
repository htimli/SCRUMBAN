import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-sprints-list',
  templateUrl: './sprints-list.component.html',
  styleUrls: ['./sprints-list.component.css']
})
export class SprintsListComponent implements OnInit {



  @Input() idProject : string ;

  sprints :any[];

  selectedOption :any;

  sprintSelected : number;

  constructor(private router: Router , private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getProjectSprints(this,this.idProject);
  }

  onNewSprint(){
    this.router.navigate(["newSprint"]);
    //this.projectService.addProjectSprint(this,this.idProject);
  }

  onRemoveSprint(){
    
  }
  onchange(value){
    this.sprintSelected = value;
    
  }
  getSprintSelected(){
    return this.sprintSelected;
  }
  


  
}

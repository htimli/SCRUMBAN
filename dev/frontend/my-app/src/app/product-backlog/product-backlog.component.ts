import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-product-backlog',
  templateUrl: './product-backlog.component.html',
  styleUrls: ['./product-backlog.component.css']
})
export class ProductBacklogComponent implements OnInit {

  @Input() idProject : string;

  tasks : any[];

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getProjectTasks(this,this.idProject);
    console.log('project tasks',this.tasks);
  }

}

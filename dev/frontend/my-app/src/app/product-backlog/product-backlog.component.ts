import { Component, HostListener, Input, OnInit} from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-product-backlog',
  templateUrl: './product-backlog.component.html',
  styleUrls: ['./product-backlog.component.css']
})
export class ProductBacklogComponent implements OnInit {

  

  @Input() idProject : string;

  tasks : any[];

  selectedOption: any;
  selectedItem: any;
  

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getProjectTasks(this,this.idProject);
    console.log('project tasks',this.tasks);
  }
  
  @HostListener("click") onClick(){
    console.log('clicked');
    console.log(this.selectedItem);
    this.selectedItem = this.selectedOption;
  }

  onNewTask(){}

}

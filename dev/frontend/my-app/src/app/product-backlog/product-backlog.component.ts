import { Component, Input, OnInit} from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-product-backlog',
  templateUrl: './product-backlog.component.html',
  styleUrls: ['./product-backlog.component.css']
})
export class ProductBacklogComponent implements OnInit {

  

  @Input() idProject : string;

  tasks : any[];
  taskSelected : string;

 

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getProjectTasks(this,this.idProject);
    
  }
  

  getTaskSelected(){
    return this.taskSelected;
  }

  onChange(v :any){
    this.taskSelected = v ;
    console.log('v',v);
  }

}

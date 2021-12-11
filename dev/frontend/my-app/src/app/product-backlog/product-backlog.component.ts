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
  taskSelected : string;

  selectedOption: any;
  selectedItem: any;
  

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

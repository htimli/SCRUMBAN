import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-product-backlog',
  templateUrl: './product-backlog.component.html',
  styleUrls: ['./product-backlog.component.css']
})
export class ProductBacklogComponent implements OnInit {

  projectPageContext: boolean;

  @Input() idProject: string;

  tasks: any[];
  taskSelectedId: string;

  selectedOption: any;
  selectedItem: any;

  currentTask: any;

  constructor(private projectService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    this.projectService.getProjectTasks(this, this.idProject);
    
    if (this.router.url === '/project') {
      this.projectPageContext = true;
    }
    else {
      this.projectPageContext = false;
    }
  }

  onNewTask(){
    this.router.navigate(['newTask']);
   }
 
   onRemoveTask(){
     this.projectService.removeProjectTask(this,this.idProject,{id: this.getTaskSelected()});
   }

  getTaskSelected() {
    return this.taskSelectedId;
  }

  onChange(v: any) {
    this.taskSelectedId = v;
    console.log('v', v);
  }

}

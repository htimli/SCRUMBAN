import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.css']
})
export class ProjectMembersComponent implements OnInit {

  @Input() idProject : string;

  members: any[];

  constructor(private router: Router, private projectService: ProjectsService ) { }

  ngOnInit(): void {
    this.projectService.getProjectMembers(this,this.idProject);
  }

  onAddMember(){
    this.projectService.addProjectUser(this,this.idProject,userid);
  }

}

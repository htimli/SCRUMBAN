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

  memberData = {
  email: '',
  }
  members: any[];
  memberEmail: string;

  constructor(private router: Router, private projectService: ProjectsService ) { }

  ngOnInit(): void {
    this.projectService.getProjectMembers(this,this.idProject);
  }

  onAddMember(memberEmail: string){

    console.log('memeber',memberEmail)

    this.memberData.email = memberEmail;

    this.projectService.addProjectUser(this,this.idProject,this.memberData);
  }

}

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  private projectData = {
    title : '' ,
    scrumMaster: '',
    progress : 0,
    user : '',
  }
  

  constructor(private router: Router , private httpClient : HttpClient , private projectService : ProjectsService , private authService : AuthService) { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    this.getDataFromForm(form);

    this.projectService.saveProject(this.projectData).then(() => {this.router.navigate(['project']);});
  }

  private getDataFromForm(form: NgForm) {
    this.projectData.title = form.value.ProjectName;
    this.projectData.user = this.authService.getcurrentUserId();
    this.projectData.progress = 0;
  }

  saveProject(){

    this.httpClient.post('http://localhost:5000/api/projects/add',this.projectData).subscribe(
      data => {console.log(data);}
    );
  }

  

}

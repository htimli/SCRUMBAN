import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  private projectData = {
    title : '' ,
    scrumMaster: '',
    progress : 0
  }  

  constructor(private router: Router , private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.projectData.title = form.value.ProjectName;
    this.projectData.scrumMaster = "toto";
    this.projectData.progress = 0;

    this.saveProject();

    this.router.navigate(["project"])
  }

  saveProject(){

    this.httpClient.post('http://localhost:5000/api/projects/add',this.projectData).subscribe(
      data => {console.log(data);}
    );
  }

  

}

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from '../services/logIn.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {



  private userData = {
    email : '',
    password : ''
  };

  constructor(private router: Router, private logInService: LogInService , private httpClient : HttpClient) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    //console.log(form.value);
    this.userData.email = form.value.email;
    this.userData.password = form.value.password;

    this.logInService.logIn().then(
      () => {
        //this.router.navigate(['projects']);  
        this.saveUserId();

      }
    
    )
   
  }

  saveUserId(){

    this.httpClient.post('http://localhost:5000/api/users/findOne',this.userData,).
    subscribe(
      data => {console.log(data);}
    );

  }

  
  getuserIdFromServer(){
    this.httpClient
    .get<any[]>('http://localhost:5000/api/users/all').subscribe(data => {
      console.log(data);
    });

  }
  

}

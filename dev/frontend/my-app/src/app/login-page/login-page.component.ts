import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  logAlert: boolean;

  private userData = {
    email : '',
    password : ''
  };

  constructor(private router: Router, private authService: AuthService , private httpClient : HttpClient) { 
    this.logAlert = false;
  }

  ngOnInit(): void {

  }
  
  onSubmit(form: NgForm) {
    this.userData.email = form.value.email;
    this.userData.password = form.value.password;
    this.authService.logIn(this.userData).then(
      () => {
        this.authService.switchLog();
        this.logAlert = false;
        this.router.navigate(['projects']);  
      },
      () => {this.logAlert = true;}
    )
  }
  
  getuserIdFromServer(){
    this.httpClient
    .get<any[]>('http://localhost:5000/api/users/all').subscribe(data => {
      console.log(data);
    });

  }

}

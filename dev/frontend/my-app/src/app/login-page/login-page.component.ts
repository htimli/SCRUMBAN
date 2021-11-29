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

  constructor(private router: Router, private logInService: LogInService) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  onLogIn(){
    this.logInService.logIn().then(
      () => {
        console.log('LogIn Success');
        this.router.navigate(['projects']);
      }
    )
  }


}

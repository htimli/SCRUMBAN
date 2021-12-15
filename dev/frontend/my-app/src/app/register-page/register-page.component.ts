import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})

export class RegistrationPageComponent implements OnInit {

  correctEmail: boolean;
  correctPassword: boolean;

  private userData = {
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''

  };

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) {
    this.correctPassword = true;
    this.correctEmail = true;
  }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    //for the moment we save just the username & the passeword
    if (form.value.password == form.value.confirmPassword) {
      this.correctPassword = true;
      this.userData.userName = form.value.firstname;
      this.userData.password = form.value.password;
      this.userData.email = form.value.email;

      this.authService.signIn(this.userData).then(
        () => {
          this.correctEmail = true;
          this.authService.logIn(this.userData).then(
            () => { this.router.navigate(['projects']); }
          );
        },
        () => { this.correctEmail = false; }
      )
    }
    else {
      this.correctPassword = false;
    }
  }
}

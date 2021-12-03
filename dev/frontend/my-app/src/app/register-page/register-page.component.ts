import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LogInService } from '../services/logIn.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  private userData = {
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(
    private httpClient: HttpClient,
    private logInService: LogInService
  ) {}

  ngOnInit(): void {}

  saveData() {
    this.httpClient
      .post('http://localhost:5000/api/users/addOne', this.userData)
      .subscribe((data) => {
        console.log(data);
      });
  }

  onSubmit(form: NgForm) {
    //for the moment we save just the username & the passeword
    this.userData.userName = form.value.firstname;
    this.userData.password = form.value.password;
    this.userData.email = form.value.email;

    //console.log(this.userData);

    this.logInService.logIn().then(() => {
      console.log('LogIn Success');
      this.saveData();
    });
  }
}

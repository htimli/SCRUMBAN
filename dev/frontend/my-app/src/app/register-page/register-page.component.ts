import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
/*

function ratingRangeValidator(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (
      c.value !== null &&
      (isNaN(c.value) || c.value < min || c.value > max)
    ) {
      return { rangeError: true };
    }

    return null;
  };
}

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const emailConfirmControl = c.get('confirmEmail');

  if (emailControl.pristine || emailConfirmControl.pristine) {
    return null;
  }

  if (emailControl.value === emailConfirmControl.value) {
    return null;
  }

  return { match: true };
}
*/
@Component({
  selector: 'app-registration-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})

export class RegistrationPageComponent implements OnInit {

  private userData = {
    userName : '',
    password : '',
    firstName : '',
    lastName : '',
    email : ''

  }; 

  constructor( private httpClient : HttpClient, private authService : AuthService, private router: Router ) {}

  ngOnInit(): void {}
  

  saveData() {
    this.httpClient.post('http://localhost:5000/api/users/addOne',this.userData)
    .subscribe(
      data => {console.log(data);}
      );
  }

  onSubmit(form: NgForm){
    //for the moment we save just the username & the passeword 
    this.userData.userName = form.value.firstname;
    this.userData.password = form.value.password;
    this.userData.email = form.value.email;

    //console.log(this.userData);
    
    this.authService.logIn(this.userData).then(
      () => {
        this.saveData();

      }
    )
    
  }

  onSignIn(){
    this.authService.signIn().then(
      () => {
        this.authService.switchLog();
        this.router.navigate(['projects']);
      }
    )
  }
}

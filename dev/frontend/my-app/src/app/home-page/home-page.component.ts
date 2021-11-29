import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInService } from '../services/logIn.service';
import { SignInService } from '../services/signIn.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private signInService: SignInService, private logInService: LogInService, private router: Router) { }

  ngOnInit(): void {

  }

  onLogIn(){
    this.logInService.logIn().then(
      () => {
        console.log('LogIn Success');
        this.router.navigate(['logIn']);
      }
    )
  }

  onSignIn(){
    this.signInService.signIn().then(
      () => {
        console.log('SignIn Success');
        this.router.navigate(['signIn']);
      }
    )
  }

}

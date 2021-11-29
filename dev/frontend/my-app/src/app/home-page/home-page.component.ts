import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../services/signIn.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit(): void {

  }

  onLogIn(){
    this.router.navigate(['logIn']);
  }

  onSignIn(){
    this.router.navigate(['register']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  loged:boolean;

  constructor(private router: Router) { 
    this.loged = false;
  }

  ngOnInit(): void {
  }

  onSignIn(){
    this.loged = true;
    this.router.navigate(['logIn']);
  }

  onLogIn(){
    this.loged =true;
    this.router.navigate(['logIn']);
  }

  onLogOut(){
    this.loged = false;
    this.router.navigate(['']);
  }


}

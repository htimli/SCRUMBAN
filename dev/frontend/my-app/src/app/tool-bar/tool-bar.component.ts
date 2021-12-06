import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit, OnDestroy {

  loged: boolean;
  logedSubscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.logedSubscription = this.authService.logedSubject.subscribe(
      (loged: boolean) => {
        this.loged = loged;
      }
    );
  }

  ngOnDestroy() {
    this.logedSubscription.unsubscribe();
  }

  onSignIn() {
    this.router.navigate(['register']);
  }

  onLogIn() {
    this.router.navigate(['logIn']);
  }

  onLogOut() {
    this.authService.logOut().then(
      () => {
        this.authService.switchLog();
        this.router.navigate(['']);
      }
    );
  }


}

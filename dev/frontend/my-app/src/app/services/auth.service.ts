import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loged:boolean;
  logedSubject: Subject<boolean>;

  constructor() {
    this.loged=false;
    this.logedSubject = new Subject<boolean>();
  }

  switchLog(){
    if(this.loged){
      this.loged=false;
    }
    else{
      this.loged=true;
    }
    this.logedSubject.next(this.loged);
  }

  signIn(){
    return new Promise(
      (resolve, rejected) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      }
    );
  }

  logIn(){
    return new Promise(
      (resolve, rejected) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      }
    );
  }

  logOut(){
    return new Promise(
      (resolve, rejected) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      }
    );
  }
}

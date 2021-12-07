import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loged: boolean;
  logedSubject: Subject<boolean>;


  constructor(private httpClient: HttpClient) {
    this.loged = false;
    this.logedSubject = new Subject<boolean>();
  }

  signIn(userData: object) {
    return new Promise(
      (resolve, rejected) => {
        this.saveData(userData).then(
          () => {resolve(true); this.loged=true; this.logedSubject.next(this.loged)},
          () => {rejected(true);}
        );
      }
    );
  }

  saveData(userData: object) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient.post('http://localhost:5000/api/users/addOne',userData)
    .subscribe(
      data => {console.log(data); resolve(true);},
      error => {rejected(true);}
      );
    }
  );
}

  logIn(userData: object) {
    return new Promise(
      (resolve, rejected) => {
        this.saveUserId(userData).then(
          () => { resolve(true); this.loged=true; this.logedSubject.next(this.loged)}, 
          () => { rejected(true);}
        );
      }
    );
  }

  saveUserId(userData: object) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient.post('http://localhost:5000/api/users/findOne', userData,).
        subscribe(
          data => { console.log(data); resolve(true);},
          error => {rejected(true);}
        );
      }
    );
  }

  logOut() {
    return new Promise(
      (resolve, rejected) => {
        this.loged=false; 
        this.logedSubject.next(this.loged);
        resolve(true);
      }
    );
  }
}

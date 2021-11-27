import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  inputs = document.querySelector('input[type="text"], input[type="password"]');
  pseudo : String;
  email : String;
  password : String;
  constructor() {
    this.pseudo = "";
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  errorDisplay = (tag: String, message: String, valid: boolean): void => {
    let container = document.querySelector("." + tag + "-container");
    let span = document.querySelector("." + tag + "-container > span");
    if (!valid){
      // @ts-ignore
      container.classList.add("error");
      // @ts-ignore
      span.textContent = span;
    }else {
      // @ts-ignore
      container.classList.remove("error");
      // @ts-ignore
      span.textContent = message;
    }
  }

  pseudoChecker = (value: string) : void => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)){
      this.errorDisplay("speudo","Le pseudo doit faire entre 3 à 20 caractères",false);
    }else if(!(value.length > 3)){
      this.errorDisplay("pseudo","Le pseudo ne doit pas contenir des caracteres speciaux!",false);
    }else {
      this.errorDisplay("pseudo","",true);
      this.pseudo = value;
    }
  };

  emailChecker = (value:String) => {
    if(!value.length){

    }else {

    }
  };

  passwordChecker = () => {};

  confirmChecker = () => {};

}

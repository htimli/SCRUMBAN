import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

import  {RouterModule, Routes} from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component' ;


const appRoutes : Routes = [
  { path: 'homepage', component : HomePageComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

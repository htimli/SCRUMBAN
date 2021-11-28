import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

import  {RouterModule, Routes} from '@angular/router' ;

import { LogInService } from './service/logIn.service';
import { SignInService } from './service/signIn.service';


const appRoutes : Routes = [
  { path: '', component : HomePageComponent },
  {path: 'signIn', component : SignInPageComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    LogInService,
    SignInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

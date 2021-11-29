import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './register-page/register-page.component' ;


import { LogInService } from './service/logIn.service';
import { SignInService } from './service/signIn.service';
import { ProjectsListPageComponent } from './projects-list-page/projects-list-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';



const appRoutes : Routes = [
  { path: '', component : HomePageComponent },
  { path: 'signIn', component : SignInPageComponent},
  { path: 'logIn', component : LoginPageComponent },
  { path: 'projects', component : ProjectsListPageComponent},
  { path: 'register', component : RegistrationPageComponent},
  { path: 'page-not-found',component :NotFoundPageComponent},
  { path :'**', redirectTo :'page-not-found'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInPageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ProjectsListPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LogInService, SignInService],
  bootstrap: [AppComponent],
})
export class AppModule {}

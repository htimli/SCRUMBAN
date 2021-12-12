import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

import { Router, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './register-page/register-page.component';

import { ProjectsListPageComponent } from './projects-list-page/projects-list-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

// for drag & drop
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { SprintsListComponent } from './sprints-list/sprints-list.component';
import { ProjectPageComponent } from './project-page/project-page.component';

//http client

import { HttpClientModule } from '@angular/common/http';
import { ProductBacklogComponent } from './product-backlog/product-backlog.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ProjectMembersComponent } from './project-members/project-members.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signIn', component: SignInPageComponent },
  { path: 'logIn', component: LoginPageComponent },
  { path: 'project', component: ProjectPageComponent },
  { path: 'newProject', component: NewProjectComponent },
  { path: 'projects', component: ProjectsListPageComponent },
  { path: 'newSprint', component: NewSprintComponent },
  { path: 'newTask', component: NewTaskComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'page-not-found', component: NotFoundPageComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInPageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ProjectsListPageComponent,
    NotFoundPageComponent,
    KanbanBoardComponent,
    SprintsListComponent,
    ProjectPageComponent,
    ProductBacklogComponent,
    ToolBarComponent,
    NewProjectComponent,
    NewSprintComponent,
    NewTaskComponent,
    ProjectMembersComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

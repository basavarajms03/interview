import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { LoginComponent } from './login/login.component';
import { PendingTasksComponent } from './task/pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './task/completed-tasks/completed-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    LoginComponent,
    PendingTasksComponent,
    CompletedTasksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

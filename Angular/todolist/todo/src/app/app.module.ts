import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoService} from "./services/todo/todo.service";
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    CommentsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,



  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

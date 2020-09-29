import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './modules/user/components/all-users/all-users.component';
import { SinglUserComponent } from './modules/user/components/singl-user/singl-user.component';
import { UserPostComponent } from './modules/user/components/user-post/user-post.component';
import { AllPostComponent } from './modules/post/components/all-post/all-post.component';
import { SinglePostComponent } from './modules/post/components/single-post/single-post.component';
import { PostCommentsComponent } from './modules/post/components/post-comments/post-comments.component';
import { AllCommentsComponent } from './modules/comments/components/all-comments/all-comments.component';
import { SingleCommentComponent } from './modules/comments/components/single-comment/single-comment.component';
import { UserForPostComponent } from './modules/user/components/user-for-post/user-for-post.component';
import { PostForCommentComponent } from './modules/post/components/post-for-comment/post-for-comment.component';


@NgModule({
    declarations: [
       AppComponent,
      //   UserForPostComponent,
      //   UserPostComponent,
      //   PostForCommentComponent,
      //   AllUsersComponent,
      //  SinglUserComponent,
      //   UserPostComponent,
      //   AllPostComponent,
      // SinglePostComponent,
      //   PostCommentsComponent,
      // AllCommentsComponent,
      //   SingleCommentComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

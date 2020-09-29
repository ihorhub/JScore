import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllCommentsComponent} from "../all-comments/all-comments.component";
import {SingleCommentComponent} from "../single-comment/single-comment.component";
import {CommentsService} from "../../comments.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [AllCommentsComponent,SingleCommentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:'',component:AllCommentsComponent}
    ])
  ],
  providers:[CommentsService]
})
export class CommentsModule { }

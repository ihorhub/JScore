import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllPostComponent} from "../components/all-post/all-post.component";
import {PostCommentsComponent} from "../components/post-comments/post-comments.component";
import {PostForCommentComponent} from "../components/post-for-comment/post-for-comment.component";
import {SinglePostComponent} from "../components/single-post/single-post.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {PostService} from "../post.service";



const routes:Routes=[
  {path:'',component:AllPostComponent,children:[
      {path:'comments',component:PostForCommentComponent}
    ]}
]
@NgModule({
  declarations: [AllPostComponent,PostCommentsComponent,PostForCommentComponent,SinglePostComponent],
  imports: [
    CommonModule,HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[PostService]
})
export class PostModule { }

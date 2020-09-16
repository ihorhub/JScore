import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {PostsComponent} from "./components/posts/posts.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {UserResolveService} from "./services/todo/user-resolve.service";
import {PostResolveService} from "./services/todo/post-resolve.service";
import {CommentResolveService} from "./services/todo/comment-resolve.service";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'users', component:UsersComponent,resolve:{userResolve:UserResolveService}},
  {path:'posts',component:PostsComponent,resolve:{postResolve:PostResolveService}},
  {path:'comments',component:CommentsComponent,resolve:{commentResolve:CommentResolveService}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

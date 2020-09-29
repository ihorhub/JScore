import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path:'users',loadChildren:() => import('./modules/user/user-module/user-module').then(value => value.UserModule) },
 {path:'posts',loadChildren:() => import('./modules/post/post/post.module').then(value => value.PostModule)},
 {path:'comments',loadChildren:() => import('./modules/comments/components/comments/comments.module').then(value => value.CommentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

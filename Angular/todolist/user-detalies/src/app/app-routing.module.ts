import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {UserResolveService} from "./services/user-resolve.service";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserDetaliesTwoComponent} from "./components/user-detalies-two/user-detalies-two.component";
import {UserDetailsThreComponent} from "./components/user-details-thre/user-details-thre.component";
import {AllPostComponent} from "./components/all-post/all-post.component";

const routes: Routes = [
  {path:'users',component:AllUsersComponent,
  children:[
   //{path:'details/:id',component :UserDetailsComponent}
    //{path:'details/:id',component:UserDetaliesTwoComponent}
    {path:'details/:id',component:UserDetailsThreComponent},
    {path:'posts',component: AllPostComponent}
    ]
  }]//resolve:{xxx:UserResolveService}}
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

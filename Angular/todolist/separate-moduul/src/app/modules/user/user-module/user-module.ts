import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllUsersComponent} from "../components/all-users/all-users.component";
import {SinglUserComponent} from "../components/singl-user/singl-user.component";
import {UserService} from "../user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {UserForPostComponent} from "../components/user-for-post/user-for-post.component";



@NgModule({
  declarations: [AllUsersComponent,SinglUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    RouterModule.forChild([
      {path:'',component:AllUsersComponent,
        children:[{path:'posts',component:UserForPostComponent}]}
    ])
  ],
  providers:[UserService]
})
export class UserModule { }

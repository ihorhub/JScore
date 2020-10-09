import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./Models/User";
import {UserService} from "./servis/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  userList:User[]=[]


  constructor(private  userService:UserService) {
    this.userService.getUser().subscribe(value => this.userList=value)

}}


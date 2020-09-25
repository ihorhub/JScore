import { Component, OnInit } from '@angular/core';
import {User} from "../../../../../todo/src/app/models/User";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  usersList: User[] = []
  constructor(private userService:UserService){
             // private activatedRoute:ActivatedRoute) {
    this.userService.getUser().subscribe(value => this.usersList=value)
    //this.activatedRoute.data.subscribe(value => this.usersList=value.xxx)
  }

  ngOnInit(): void {
  }

}

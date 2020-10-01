import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userList:User[]

  constructor( private userService:UserService) {
    this.userService.getUser().subscribe(value => this.userList=value)
  }

  ngOnInit(): void {
  }

}

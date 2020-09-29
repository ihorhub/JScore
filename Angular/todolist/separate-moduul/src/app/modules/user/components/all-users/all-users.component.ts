import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import {User} from "../../../../models/User";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  usersList:User[]
  constructor( private userService:UserService) {
    this.userService.getUser().subscribe(value => this.usersList=value)
  }

  ngOnInit(): void {
  }

}

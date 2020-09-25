import { Component, OnInit } from '@angular/core';

import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
userone:User
  constructor (private activatedRoute:ActivatedRoute,
               private  userService:UserService) {
    this.activatedRoute.params.subscribe(value => {this.userService.getUserById(value.id).subscribe(value1 => {console.log(value1);
    this.userone=value1})});

  }


  ngOnInit(): void {
  }

}

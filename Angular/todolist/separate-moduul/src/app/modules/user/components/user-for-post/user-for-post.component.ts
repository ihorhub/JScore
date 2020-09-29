import { Component, OnInit } from '@angular/core';
import {Post} from "../../../../models/Post";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-user-for-post',
  templateUrl: './user-for-post.component.html',
  styleUrls: ['./user-for-post.component.css']
})
export class UserForPostComponent implements OnInit {
  postList:Post[];
  constructor(private activatedRoute:ActivatedRoute,
              private userService:UserService) {
    this.activatedRoute.queryParams.subscribe(value => {
      console.log(value)
      this.userService.getUserById(value.id).subscribe(value1 => {
        console.log(value1)
        this.postList=value1})
    })
  }

  ngOnInit(): void {
  }

}

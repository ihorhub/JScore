import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {TodoService} from "../../services/todo/todo.service";
import {Post} from "../../models/post";
import {Comments} from "../../models/comments";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  usersList: User[] = [];
  postList: Post[] = [];
  commentList: Comments[] = [];
  constructor( private activatedRoute:ActivatedRoute)
  //private todoService:TodoService,
  {
    this.activatedRoute.data.subscribe(value => console.log(value,'...............'));

    this.activatedRoute.data.subscribe(value => this.usersList=value.userResolve)
    this.activatedRoute.data.subscribe(value => this.postList=value.postResolve)
    this.activatedRoute.data.subscribe(value => this.commentList=value.commentResolve)

  }



}

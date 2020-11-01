import { Component, OnInit } from '@angular/core';
import {Post} from "../../model/Post";
import {PostService} from "../../servic/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts:Post[]

  constructor( private postService:PostService) { }

  ngOnInit(): void {
  this.postService.getPostByUserID().subscribe(value => this.posts=value)
  }

}

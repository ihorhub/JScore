import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../post.service";
import {Comment} from "../../../../models/Comment";

@Component({
  selector: 'app-post-for-comment',
  templateUrl: './post-for-comment.component.html',
  styleUrls: ['./post-for-comment.component.css']
})
export class PostForCommentComponent implements OnInit {
commentsList: Comment[]
  constructor(private activatedRoute:ActivatedRoute,
              private  postService:PostService) {
  this.activatedRoute.queryParams.subscribe(value => {
    console.log(value)
    this.postService.geCommentPostId(value.id).subscribe(value1 => {
      console.log(value1)
      this.commentsList=value1
    })
  })


  }

  ngOnInit(): void {
  }

}

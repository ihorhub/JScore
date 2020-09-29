import { Component, OnInit } from '@angular/core';
import {Comment} from "../../../../models/Comment";
import {CommentsService} from "../../comments.service";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  commentList:Comment[]
  constructor(private commentsService:CommentsService) {
    this.commentsService.getAllComment().subscribe(value => this.commentList=value)
  }

  ngOnInit(): void {
  }

}

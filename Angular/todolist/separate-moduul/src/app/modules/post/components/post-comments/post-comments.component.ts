import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../../models/Comment";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
@Input()
comment:Comment
  constructor() { }

  ngOnInit(): void {
  }

}

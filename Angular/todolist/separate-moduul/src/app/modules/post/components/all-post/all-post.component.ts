import { Component, OnInit } from '@angular/core';
import {PostService} from "../../post.service";
import {Post} from "../../../../models/Post";

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  allpostList:Post[]
  constructor( private postService:PostService) {
    this.postService.getPost().subscribe(value => this.allpostList=value)
  }

  ngOnInit(): void {
  }

}

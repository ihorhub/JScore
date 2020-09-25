import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute,
               private postService:PostService) {
    this.activatedRoute.queryParamMap.subscribe(value =>{
      console.log(value)
      this.postService.getPostByUserId(value.keys).subscribe(value1 => {
        console.log(value1)
      })
    })
  }

  ngOnInit(): void {
  }

}

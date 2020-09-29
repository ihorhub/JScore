import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../models/Post";
import {Comment} from "../../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private httpClient:HttpClient) {
      }
      getPost():Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      }
  geCommentPostId(id:number):Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(  `https://jsonplaceholder.typicode.com/comments?postId=${id}`)

  }
}
// https://jsonplaceholder.typicode.com/posts/1/comments
//   https://jsonplaceholder.typicode.com/comments?postId=${id}

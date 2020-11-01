import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
URL='http://jsonplaceholder.typicode.com/posts?userId='
  constructor( private httpClient:HttpClient) { }
  getPostByUserID(id:number):Observable<Post[]>{
  return this.httpClient.get<Post[]>(`${this.URL}${id}`)

  }
}

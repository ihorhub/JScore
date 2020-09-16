import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {Post} from "../../models/post";
import {Comments} from "../../models/comments";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private  httpClient: HttpClient) {
  }

  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')

  }
  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`http://jsonplaceholder.typicode.com/users/${id}`);
  }
  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getComment(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>('https://jsonplaceholder.typicode.com/comments')
  }

}




import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {Post} from "../../models/Post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient:HttpClient) {

  }
  getUser():Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
  getUserById(id:number):Observable<Post[]>{
    return this.httpClient.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }
}

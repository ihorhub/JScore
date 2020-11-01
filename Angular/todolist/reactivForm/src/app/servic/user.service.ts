import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
URL='https://jsonplaceholder.typicode.com/users'
  constructor( private httpClient:HttpClient) {

  }
  getUser():Observable<User[]>{
  return this.httpClient.get<User[]>(`${this.URL}`)


  }
  getUserByID(id:string):Observable<User>{
  return  this.httpClient.get<User>( `${this.URL}${id}`)
  }
}

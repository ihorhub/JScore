import { Injectable } from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {User} from "../../models/User";
import {TodoService} from "./todo.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]>{

  constructor(private todoService:TodoService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    return this.todoService.getUser()
  }
}

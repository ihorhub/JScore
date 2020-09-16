import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {TodoService} from "./todo.service";
import {Post} from "../../models/post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]>{

  constructor(private todoService:TodoService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.todoService.getPost()
  }
}

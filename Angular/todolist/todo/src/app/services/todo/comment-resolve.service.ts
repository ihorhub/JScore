import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {TodoService} from "./todo.service";
import {Comments} from "../../models/comments";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<Comments[]>{

  constructor( private todoService:TodoService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comments[]> | Promise<Comments[]> | Comments[] {
    return this.todoService.getComment()
  }
}

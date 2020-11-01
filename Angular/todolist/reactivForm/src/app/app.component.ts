import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "./model/User";
import {UserService} from "./servic/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactivForm';
  userList:User[]
  user:User
  form:FormGroup
  userid:FormControl=new FormControl('')

  constructor( private userService:UserService , private router:Router) {
    this.userService.getUser().subscribe(value => this.userList=value)
    this.form=new FormGroup({userid:this.userid})
  }


  action(form: FormGroup) :void{
console.log(form)
console.log(form.controls.toString(this.userid))





  }

  getuser(form: FormGroup) {
    console.log(form.controls.toString().Params)

  }
}


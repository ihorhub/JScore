import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {User} from "./model/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactivForm';
  userList:User
  form:FormGroup
}

import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";



@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
@Input()
userList:User[]
  constructor() { }

  ngOnInit(): void {
  }

}

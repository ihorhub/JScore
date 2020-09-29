import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/User";

@Component({
  selector: 'app-singl-user',
  templateUrl: './singl-user.component.html',
  styleUrls: ['./singl-user.component.css']
})
export class SinglUserComponent implements OnInit {
  @Input()
user:User
  constructor() { }

  ngOnInit(): void {
  }

}

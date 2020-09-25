import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-detalies-two',
  templateUrl: './user-detalies-two.component.html',
  styleUrls: ['./user-detalies-two.component.css']
})
export class UserDetaliesTwoComponent implements OnInit {
user:User
  constructor( private router:Router,
               private  activatedRoute:ActivatedRoute
  ) {

    this.activatedRoute.params.subscribe(value => {
      console.log(this.router.getCurrentNavigation().extras.state);
      console.log(history.state);
      this.user = history.state
    })
  }
  ngOnInit(): void {
  }

}

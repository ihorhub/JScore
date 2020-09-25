import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details-thre',
  templateUrl: './user-details-thre.component.html',
  styleUrls: ['./user-details-thre.component.css']
})
export class UserDetailsThreComponent implements OnInit {

  constructor( private  router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(value =>{ console.log(value)
      this.router.getCurrentNavigation().extras.state})


  }

  ngOnInit(): void {
  }

}

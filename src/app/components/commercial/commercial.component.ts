import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ScrollTopService }  from '../../services/scroll-top.service';



@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  constructor(
   public router: Router,
       public scrollTopService:ScrollTopService,
    private location: Location
  	) { }

  ngOnInit() {
  	      this.scrollTopService.setScrollTop();

  }

}

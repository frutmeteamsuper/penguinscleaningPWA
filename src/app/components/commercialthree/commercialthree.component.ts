import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commercialthree',
  templateUrl: './commercialthree.component.html',
  styleUrls: ['./commercialthree.component.css']
})
export class CommercialthreeComponent implements OnInit {

  constructor(
   public router: Router,
    private location: Location
  	) { }

  ngOnInit() {
  }

}

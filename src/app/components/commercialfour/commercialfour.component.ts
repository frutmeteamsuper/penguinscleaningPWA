import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commercialfour',
  templateUrl: './commercialfour.component.html',
  styleUrls: ['./commercialfour.component.css']
})
export class CommercialfourComponent implements OnInit {

  constructor(
   public router: Router,
    private location: Location
  	) { }

  ngOnInit() {
  }

}

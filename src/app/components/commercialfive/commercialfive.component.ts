import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commercialfive',
  templateUrl: './commercialfive.component.html',
  styleUrls: ['./commercialfive.component.css']
})
export class CommercialfiveComponent implements OnInit {

  constructor(
   public router: Router,
    private location: Location
  	) { }

  ngOnInit() {
  }

}

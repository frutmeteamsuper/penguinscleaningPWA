import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commercialtwo',
  templateUrl: './commercialtwo.component.html',
  styleUrls: ['./commercialtwo.component.css']
})
export class CommercialtwoComponent implements OnInit {

  constructor(
   public router: Router,
    private location: Location
  	) { }

  ngOnInit() {
  }

}

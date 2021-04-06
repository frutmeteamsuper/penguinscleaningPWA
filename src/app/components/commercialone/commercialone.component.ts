import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commercialone',
  templateUrl: './commercialone.component.html',
  styleUrls: ['./commercialone.component.css']
})
export class CommercialoneComponent implements OnInit {

  constructor(
  public router: Router,
    private location: Location
  	) { }

  ngOnInit() {
  }

}

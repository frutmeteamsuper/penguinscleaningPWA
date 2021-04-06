import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { isError } from "util";

import { UserWService } from '../../services/user-w.service';
import { DataApiService } from '../../services/data-api.service';
 
  

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(
  	   public _uw:UserWService,
  	  private dataApi: DataApiService,
    public router: Router,
    public scrollTopService:ScrollTopService,
    private http: HttpClient,
    private location: Location
    ) { }
      loadAPI = null;  
      saludo() {
        console.log("hola");
      }

  // url = "assets/assetspenguins/js/jquery.js";
  url2 = "assets/assetspenguins/js/script.js";
 // public loadScript() {
 //    let node = document.createElement("script");
 //    node.src = this.url;
 //    node.type = "text/javascript";
 //    node.async = true;
 //    node.charset = "utf-8";
 //    document.getElementsByTagName("head")[0].appendChild(node);
 //  }
   public loadScript2() {
    let node = document.createElement("script");
    node.src = this.url2;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  ngOnInit() {
      if (this._uw.loaded==true){
      this.loadAPI = new Promise(resolve => {
        // this.loadScript();
        this.loadScript2();
        // this.loadScript3();
        });
      }
    this._uw.loaded=true;
  }

}

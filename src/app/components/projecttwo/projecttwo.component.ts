import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'app-projecttwo',
  templateUrl: './projecttwo.component.html',
  styleUrls: ['./projecttwo.component.css']
})
export class ProjecttwoComponent implements OnInit {


 constructor(
   public _uw:UserWService,
  private dataApi: DataApiService,
   public router: Router,
    private location: Location
  	) { }
   loadAPI = null;  

  url = "assets/assetspenguins/js/bxslider.js";
  url2 = "assets/assetspenguins/js/script.js";
 public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
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
        this.loadScript();
        this.loadScript2();
        // this.loadScript3();
        });
      }
    this._uw.loaded=true;
  }

}

import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from  '@angular/common/http';
import { isError } from "util";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";


@Component({
  selector: 'app-prjts',
  templateUrl: './prjts.component.html',
  styleUrls: ['./prjts.component.css']
})
export class PrjtsComponent implements OnInit {
  loadAPI = null;
  public tix:TixInterface;
  url = "assets/assetspenguins/js/bxslider.js";
  url2 = "assets/assetspenguins/js/script.js";

public tixs:TixInterface;



  constructor(
    private dataApi: DataApiService,
    public _uw:UserWService,
    private location: Location,
        private route:ActivatedRoute,
    private router: Router
    ) { }
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
  getAllTixs(){
        this.dataApi.getAllTixsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.tixs=res;            
        }
     });  
    }
  ngOnInit() {
        this.getAllTixs();
  }

}

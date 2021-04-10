
import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from  '@angular/common/http';
import { isError } from "util";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { OrderInterface } from '../../models/order-interface';
import { UserWService } from '../../services/user-w.service';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})


export class QuoteComponent implements OnInit {

 serviceType: string = '';



    days: number[]=[
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
    ]; 

     hours: number[]=[
1,2,3,4,5
    ]; 

  serviceOptions = [
    'Houses',
    'Hotel, Motel, Chalets, Airbnb.',
    'Commercial offices: Government, Bank, Medical, Others.',
    'Events, Before event, After event.',
    'Gym, Post-construction, Daycares, Restaurant and bar.',
    'Commercial spaces cleaning',
    'Health and medic centers'
    ];

 selectedCar: number;

    serviceOptions2 = [
        { id: 1, name: 'Houses' },
        { id: 2, name: 'Hotel, Motel, Chalets, Airbnb.' },
        { id: 3, name: 'Commercial offices: Government, Bank, Medical, Others.' },
        { id: 4, name: 'Events, Before event, After event.' },
        { id: 5, name: 'Gym, Post-construction, Daycares, Restaurant and bar.' },
        { id: 6, name: 'Commercial spaces cleaning.' },
        { id: 7, name: 'Health and medic centers.' },
    ];


  constructor(
    public scrollTopService:ScrollTopService,
    private http: HttpClient,
    public _uw:UserWService, 
    private dataApiService: DataApiService,
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder
  	) { }

  ngFormAddOrder: FormGroup;
  submitted = false;
   selected = false;
  serviceSelected="Service Type";
  houseSize="House Size";
  daysPerMonth:any="Days per month";
  hoursPerDay:any="Hours per day";
  numberOfCleaners="Number of cleaners";

  public isError = false;
  public orders:OrderInterface;
  // public order:OrderInterface;  
  public pagoImage:any[]=[];
  public images:any[]=[];
/*  public pago : PagoInterface ={
  		pagoImage:[],
      	npedido:""
    };*/


  public order : OrderInterface ={
        serviceType:"",
        daysPerMonth:0,
        hoursPerDay:0

      };






 

  setType(parametro:string){
      if(parametro=='Houses'){
        this.serviceSelected=parametro;
        this.order.serviceType="Houses";
        this.selected=true;
      }  

      if(parametro=='Hotel, Motel, Chalets, Airbnb.'){
        this.serviceSelected=parametro;
        this.order.serviceType="Hotel, Motel, Chalets, Airbnb.";
        this.selected=true;
      }  

      if(parametro=='Commercial offices: Government, Bank, Medical, Others.'){
        this.serviceSelected="Commercial offices: Government, Bank, Medical...";
        this.order.serviceType="Commercial offices: Government, Bank, Medical, Others.";
        this.selected=true;
      } 
      if(parametro=='Events, Before event, After event.'){
        this.serviceSelected=parametro;
        this.order.serviceType="Events, Before event, After event.";
        this.selected=true;
      }
      if(parametro=='Gym, Post-construction, Daycares, Restaurant and bar.'){
        this.serviceSelected="Gym, Post-construction, Daycares, Restaurant ...";
        this.order.serviceType="Gym, Post-construction, Daycares, Restaurant and bar.";
        this.selected=true;
      }
      if(parametro=='Commercial spaces cleaning.'){
        this.serviceSelected=parametro;
        this.order.serviceType="Commercial spaces cleaning.";
        this.selected=true;
      }
      if(parametro=='Health and medic centers.'){
        this.serviceSelected=parametro;
        this.order.serviceType="Health and medic centers.";
        this.selected=true;
      }      
  }
okOrder(){}
  setDays(parametro:number) {

        this.daysPerMonth=parametro+" Days per month" ;
        this.order.daysPerMonth=parametro;
     
      
  }
setHours(parametro:number){
   this.hoursPerDay=parametro+" Hours per day" ;
        this.order.hoursPerDay=parametro;

}

  ngOnInit() {
    this.ngFormAddOrder = this.formBuilder.group({
        serviceType: ['', [Validators.required]]     });
  }
 get fval2() {
  return this.ngFormAddOrder.controls;
  }
  back(){

  	this.selected=false;
  }



}

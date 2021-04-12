
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
  houseSelected=false;
  selected = false;
  serviceSelected="Service Type";
  houseSize="House Size";
  daysPerMonth:any="Days per month";
  hoursPerDay:any="Hours per day";
  numberOfCleaners="Number of cleaners";

  public isError = false;
  public orders:OrderInterface;
  public pagoImage:any[]=[];
  public images:any[]=[];
  public order : OrderInterface ={
    serviceType:"",
    address:"",
    subject:"",
    subjectA2U:"",
    email:"",
    clientEmail:"",
    quoteId:"",
    quoteIdPre:0,
    daysPerMonth:0,
    hoursPerDay:0
  };

  setType(parametro:string){
      if(parametro=='Houses'){
        this.serviceSelected=parametro;
        this._uw.order.serviceType="Houses";
        this.selected=true;
        this.houseSelected=true;
      }  
      if(parametro=='Hotel, Motel, Chalets, Airbnb.'){
        this.serviceSelected=parametro;
        this._uw.order.serviceType="Hotel, Motel, Chalets, Airbnb.";
        this.selected=true;
        this.houseSelected=false;
      }  
      if(parametro=='Commercial offices: Government, Bank, Medical, Others.'){
        this.serviceSelected="Commercial offices: Government, Bank, Medical...";
        this._uw.order.serviceType="Commercial offices: Government, Bank, Medical, Others.";
        this.selected=true;
        this.houseSelected=false;
      } 
      if(parametro=='Events, Before event, After event.'){
        this.serviceSelected=parametro;
        this._uw.order.serviceType="Events, Before event, After event.";
        this.selected=true;
        this.houseSelected=false;
      }
      if(parametro=='Gym, Post-construction, Daycares, Restaurant and bar.'){
        this.serviceSelected="Gym, Post-construction, Daycares, Restaurant ...";
        this._uw.order.serviceType="Gym, Post-construction, Daycares, Restaurant and bar.";
        this.selected=true;
        this.houseSelected=false;
      }
      if(parametro=='Commercial spaces cleaning.'){
        this.serviceSelected=parametro;
        this._uw.order.serviceType="Commercial spaces cleaning.";
        this.selected=true;
        this.houseSelected=false;
      }
      if(parametro=='Health and medic centers.'){
        this.serviceSelected=parametro;
        this._uw.order.serviceType="Health and medic centers.";
        this.selected=true;
        this.houseSelected=false;
      }      
  }

  setSize(parametro){
    this.houseSize=parametro;
    this._uw.order.houseSize=parametro; 
  }
  setDays(parametro:number) {
    this.daysPerMonth=parametro+" Days per month" ;
    this._uw.order.daysPerMonth=parametro;     
  }
  setHours(parametro:number){
    this.hoursPerDay=parametro+" Hours per day" ;
    this._uw.order.hoursPerDay=parametro;
  }
 public aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }
  public okOrder(){
      this.submitted = true;
        if (this.ngFormAddOrder.invalid) {
          this._uw.errorFormSendOrder=true;
        return;
            } 
      this._uw.errorFormSendOrder=false;
      this.order = this.ngFormAddOrder.value;
      this.order.status="new";

      this.order.quoteIdPre=this.aleatorio(10000,99999);
      let quoteIdString = this.order.quoteIdPre.toString();
      this.order.quoteId=quoteIdString;
      this.order.steeps=[
        {steep:true},
        {steep:false},
        {steep:false},
        {steep:false}
      ];
      // this.order.total=(this._uw.subTotal*this._uw.currency);
      this.order.car=this._uw.car;
      this._uw.order.name=this.order.name;
      this._uw.order.phone=this.order.phone;
      this._uw.order.address=this.order.address;
      this._uw.order.email=this.order.email;
      this._uw.order.subject="New Quote";
      this._uw.order.subjectA2U="Your Quote is completed...";
      this._uw.order.quoteId=this.order.quoteId;
      this._uw.order.adminName="Jessica",
      this._uw.order.amount=100,
      this._uw.order.clientEmail=this._uw.order.email,
      this._uw.order.email="frutmeteam@protonmail.com",
      console.log("uw order hoursPerDay" +this._uw.order.hoursPerDay);
      // this._uw.order.adminName=this._uw.info[0].adminName;
      // this._uw.pedido.adminEmail=this._uw.info[0].adminEmail;


      this.dataApiService.sendMailNewQuoteAA(this._uw.order).subscribe();
      

      // this.dataApi.sendMailNewQuoteA2U(this._uw.order).subscribe();
      console.log("enviando...");
      this.dataApiService.saveOrder(this._uw.order).subscribe(
            tix => this.router.navigate(['/success'])
        );
    }



  ngOnInit() {
    this.ngFormAddOrder = this.formBuilder.group({
      name: ['', [Validators.required]] ,
      phone:['',[Validators.required]], 
      email:['',[Validators.required]], 
      address:['',[Validators.required]], 

         });
    }
    
  get fval2() {
    return this.ngFormAddOrder.controls;
  }
  back(){
  	this.selected=false;
  }

}

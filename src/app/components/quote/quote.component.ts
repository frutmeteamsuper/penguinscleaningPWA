
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
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,22,23,24
  ]; 

  cleaners: number[]=[
    1,2,3,4,5
  ]; 


  subservices = [];


  serviceOptions = [
    'Houses',
    'Hotel, Motel, Chalets, Airbnb.',
    'Deep house cleaning service',
    'Commercial offices: Government, Bank, Medical, Others.',
    'Events, Before event, After event.',
    'Gym, Post-construction, Daycares, Restaurant and bar.',
    'Commercial spaces cleaning.',
    'Health and medic centers.'
    ];

  serviceOptions2 = [
      { serviceCost: 0, id: 1, name: 'Houses' },
      { serviceCost: 35, id: 2, name: 'Hotel, Motel, Chalets, Airbnb.' },
      { serviceCost: 30, id: 3, name: 'Deep house cleaning service' },
      { serviceCost: 30, id: 4, name: 'Commercial offices: Government, Bank, Medical...' },
      { serviceCost: 30, id: 5, name: 'Events, Before event, After event.' },
      { serviceCost: 35, id: 6, name: 'Gym, Post-construction, Daycares, Restaurant ...' },
      { serviceCost: 30, id: 7, name: 'Commercial spaces cleaning.' },
      { serviceCost: 40, id: 8, name: 'Health and medic centers.' },
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
    quote:boolean= false;
    appointment:boolean= false;

       loadAPI = null;  

  url = "assets/assetspenguins/js/jquery.nice-select.min.js";
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


  ngFormAddOrder: FormGroup;
  submitted = false;
  appointmentSubmitted = false;
  quoteSubmitted = false;
  houseSelected=false;
  healtSelected=false;
  selected = false;
  subserviceSelected = false;
  serviceSelected="Service Type";
  houseSize="Select size";
  subservice="Select one";
  daysPerMonth:any="0";
  hoursPerDay:any="0";
  msDays:any="Days per month";
  msProperty:any="Property or Space: ";
  mshours:any="Hours per day";
  mscleaners:any="Cleaners";
  ncleaners:any="0";
  perDayamount= 0;
  perHour=0;
  perCleaner=0;
  daysSeted=false;
  hoursSeted=false;
  cleanersSeted=false;
  typeSeted=false;
  sizeSeted=false;
  subserviceSeted=false;
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
    quoteIdPre:1,
    daysPerMonth:1,
    hoursPerDay:1,
    ncleaners:1
  };

calculate(index){
  this._uw.order.amount=this.serviceOptions2[index].serviceCost*this.daysPerMonth*this.hoursPerDay*this.ncleaners;
}

  setType(item,index){
      if(item.name=='Houses'){
        this.serviceSelected=item.name;
        this._uw.order.serviceType="Houses";
        this._uw.order.serviceSelectedId=index;
        this.selected=true;
        this.houseSelected=true;
        this.msProperty="Property or Space: ";
        this.subserviceSelected=false;
        this.healtSelected=false;

      }  
      if(item.name=='Hotel, Motel, Chalets, Airbnb.'){
        this.serviceSelected=item.name; 
        this._uw.order.serviceType="Hotel, Motel, Chalets, Airbnb.";
        this.selected=true;
        this.houseSelected=false;
         this.subserviceSeted=false;
        this._uw.order.serviceSelectedId=index;
        this.msProperty="Property or Space: ";
         this.subservices = [
            "Airbnb",
            "Chalet",
            "Hotel",
            "Motel"
          ];
          this.subserviceSelected=true;
          this.subservice="Select one";
           this.healtSelected=false;
      }  

       if(item.name=='Deep house cleaning service'){
        this.serviceSelected=item.name;
        this._uw.order.serviceType="Deep house cleaning service";
        this.selected=true;
        this.houseSelected=false;
         this.subserviceSeted=false;

        this._uw.order.serviceSelectedId=index;
        // this.msProperty="Property or Space: ";
         this.subservices = [
            "Move in",
            "Move out"          ];
          this.subserviceSelected=true;
          this.subservice="Select one";
          this.healtSelected=false;
      }

      if(item.name=='Commercial offices: Government, Bank, Medical...'){
        this.serviceSelected="Commercial offices: Government, Bank, Medical...";
        this._uw.order.serviceType="Commercial offices: Government, Bank, Medical, Others.";
        this.selected=true;
         this.healtSelected=false;
        this.houseSelected=false;
        this._uw.order.serviceSelectedId=index;
        this.msProperty="Property or Space: ";
         this.subservices = [
            "Government office",
            "Bank office",
            "Medical office",
          ];
          this.subserviceSelected=true;
          this.subservice="Select one";
         
      } 
      if(item.name=='Events, Before event, After event.'){
        this.serviceSelected=item.name;
        this._uw.order.serviceType="Events, Before event, After event.";
        this.selected=true;
        this.houseSelected=false;
         this.subserviceSeted=false;
        this._uw.order.serviceSelectedId=index;
        this.msProperty="Property or Space: ";
         this.subservices = [
            "Before",
            "Durring",
            "After"
          ];
          this.subserviceSelected=true;
          this.subservice="Select one";
          this.healtSelected=false;
      }

      if(item.name=='Gym, Post-construction, Daycares, Restaurant ...'){
        this.serviceSelected="Gym, Post-construction, Daycares, Restaurant ...";
        this._uw.order.serviceType="Gym, Post-construction, Daycares, Restaurant and bar.";
        this.selected=true;
        this.houseSelected=false;
         this.subserviceSeted=false;
        this._uw.order.serviceSelectedId=index;
        this.msProperty="Property or Space: ";
         this.subservices = [
            "Gym",
            "Post-construction",
            "Daycares",
            "Restaurant and bar"
          ];
          this.subserviceSelected=true;
          this.subservice="Select one";
          this.healtSelected=false;
      }
      if(item.name=='Commercial spaces cleaning.'){
        this.serviceSelected=item.name;
        this._uw.order.serviceType="Commercial spaces cleaning.";
        this.selected=true;
        this.houseSelected=false;
        this._uw.order.serviceSelectedId=index;
        this.subserviceSelected=true;
        this.subservice="Select one";
        this.healtSelected=true;
      }
      if(item.name=='Health and medic centers.'){
        this.serviceSelected=item.name;
        this._uw.order.serviceType="Health and medic centers.";
        this.selected=true;
        this.houseSelected=false;
        this._uw.order.serviceSelectedId=index;
        this.msProperty="Property or Space: ";
        this.subserviceSelected=true;
        this.subservice="Select one";
         this.healtSelected=true;
      } 
      this.daysPerMonth=0;
      this.hoursPerDay=0;
      this.ncleaners=0;     
      this.typeSeted=true;
      this.sizeSeted=false;
      this.daysSeted=false;  
      this.hoursSeted=false;
      this.cleanersSeted=false;
      this.subserviceSeted=false;
      this.calculate(index);
  }
    calculateHouse(parametro){
    this._uw.order.amount=0;
     if (parametro=="Basic"){this.serviceOptions2[0].serviceCost=99.99;}
    if (parametro=="Medium"){this.serviceOptions2[0].serviceCost=149.99;}
    if (parametro=="Premium"){this.serviceOptions2[0].serviceCost=199.99;}
    this._uw.order.amount=this.serviceOptions2[this._uw.order.serviceSelectedId].serviceCost;
  }
  recalcular(){
    this._uw.order.amount=this.serviceOptions2[this._uw.order.serviceSelectedId].serviceCost*this.daysPerMonth*this.hoursPerDay*this.ncleaners;
  }
  setSubservice(parametro){
    this._uw.order.subService=parametro;
    this.subservice=parametro;
    this.subserviceSeted=true;
  }
  setSize(parametro){
    this.houseSize=parametro;
    this._uw.order.houseSize=parametro; 
    if (parametro=="Basic"){this.serviceOptions2[0].serviceCost=99,99;}
    if (parametro=="Medium"){this.serviceOptions2[0].serviceCost=149,99;}
    if (parametro=="Premium"){this.serviceOptions2[0].serviceCost=199,99;}
    this.sizeSeted=true;
    this.calculateHouse(this.houseSize);
  }
  setDays(parametro:number) {
    this.daysPerMonth=parametro+" Days per month: " ;
    this._uw.order.daysPerMonth=parametro;
    this.daysPerMonth=parametro;
    this.msDays="Days per month";
    this.recalcular();
    this.daysSeted=true;  
  }
  plusHours(){
    if(this.hoursPerDay==="0"){
        this.hoursPerDay=0;
      }
    if(this.hoursPerDay<24){
        this.hoursPerDay=this.hoursPerDay+1;
        this._uw.order.hoursPerDay= this.hoursPerDay
         this.mshours="Hours per day";
        this.recalcular();
        this.hoursSeted=true;
      }
  }
   minusHours(){
    if(this.hoursPerDay>1){
    this.hoursPerDay=this.hoursPerDay-1;
    this._uw.order.hoursPerDay= this.hoursPerDay
     this.mshours="Hours per day";
    this.recalcular();
    this.hoursSeted=true;
    }
  }  

  plusDays(){
    if(this.daysPerMonth==="0"){
        this.daysPerMonth=0;
      }
    if(this.daysPerMonth<30){
        this.daysPerMonth=this.daysPerMonth+1;
        this._uw.order.daysPerMonth= this.daysPerMonth
         this.msDays="Days per month";
        this.recalcular();
        this.daysSeted=true;
      }
  }
   minusDays(){
    if(this.daysPerMonth>1){
    this.daysPerMonth=this.daysPerMonth-1;
    this._uw.order.daysPerMonth= this.daysPerMonth
     this.msDays="Days per month";
    this.recalcular();
    this.daysSeted=true;
    }
  } 


   plusCleaners(){
    if(this.ncleaners==="0"){
        this.ncleaners=0;
      }
    if(this.ncleaners<5){
        this.ncleaners=this.ncleaners+1;
        this._uw.order.ncleaners= this.ncleaners
         this.mscleaners="Cleaners";
        this.recalcular();
        this.cleanersSeted=true;
      }
  }
   minusCleaners(){
    if(this.ncleaners>1){
    this.ncleaners=this.ncleaners-1;
    this._uw.order.ncleaners= this.ncleaners
     this.mscleaners="Cleaners";
    this.recalcular();
    this.cleanersSeted=true;
    }
  }
  setHours(parametro:number){
    this.mshours="Hours per day";
    this.hoursPerDay=parametro+" Hours per day: " ;
    this._uw.order.hoursPerDay=parametro;
    this.hoursPerDay=parametro;
    this.recalcular();
    this.hoursSeted=true;
  }
  setCleaners(parametro:number){
    this.ncleaners=parametro;
    this.recalcular();
    this.mscleaners="Nro of cleaners: ";
    this.cleanersSeted=true;
  
  }

  setAppointment(){
    this.appointment=true;
    this.quote=false;
  }

  setQuote(){
    this.quote=true;
    this.appointment=false;
    // if (this.ngFormAddOrder.invalid) {
    //   this._uw.errorFormSendOrder=true;
    //   return;
    // } 

  }


 public aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }
  public okOrder(){
      this.submitted = true;
      this.quoteSubmitted=true;
        if (this.ngFormAddOrder.invalid) {
          this._uw.errorFormSendOrder=true;
        return;
            } 
        if (this.quote)
          {
            console.log("quote selected");
          this._uw.quoteSubmitted=true;
          this._uw.appointmentSubmitted=false;
          this.order = this.ngFormAddOrder.value;
          this.order.status="new";
          this.order.quoteIdPre=this.aleatorio(10000,99999);
          let quoteIdString = this.order.quoteIdPre.toString();
          this.order.quoteId=quoteIdString;
          this.order.car=this._uw.car;
          this._uw.order.name=this.order.name;
          this._uw.order.phone=this.order.phone;
          this._uw.order.address=this.order.address;
          this._uw.order.email=this.order.email;
          this._uw.order.subject="You have a new quote request";
          this._uw.order.subjectA2U="The result of your quote is";
          this._uw.order.quoteId=this.order.quoteId;
          this._uw.order.adminName="Jessica",
          this._uw.order.clientEmail=this._uw.order.email,
          // ACTIVAR EN PRODUCCION
          this._uw.order.email="penguinscleaningservice@gmail.com",
        
          // DESACTIVAR EN PRODUCCION
          // this._uw.order.email="frutmeteam@protonmail.com",
          this._uw.order.orderType="quote";
          this.dataApiService.sendMailNewQuoteAA(this._uw.order).subscribe();
          // ACTIVAR EN PRODUCCION
          this.dataApiService.sendMailNewQuoteAU(this._uw.order).subscribe();
          this.dataApiService.saveOrder(this._uw.order).subscribe(
            );
          }
        if (this.appointment)
          {
            console.log("appointment selected");
          this._uw.appointmentSubmitted=true;
          this._uw.quoteSubmitted=false;
          this.order = this.ngFormAddOrder.value;
          this.order.status="new";
          this.order.quoteIdPre=this.aleatorio(10000,99999);
          let quoteIdString = this.order.quoteIdPre.toString();
          this.order.quoteId=quoteIdString;
          this._uw.order.quoteId=this.order.quoteId;
          this._uw.order.name=this.order.name;
          this._uw.order.phone=this.order.phone;
          this._uw.order.address=this.order.address;
          this._uw.order.email=this.order.email;

          this._uw.order.orderType="appointment";
          this._uw.order.subject="You have a new appointment request";
          this._uw.order.subjectA2U="The result of your appointment is";
          this._uw.order.quoteId=this.order.quoteId;
          this._uw.order.adminName="Jessica",
          this._uw.order.clientEmail=this._uw.order.email,

          // ACTIVAR EN PRODUCCION
          this._uw.order.email="penguinscleaningservice@gmail.com",
        
          // DESACTIVAR EN PRODUCCION
          // this._uw.order.email="frutmeteam@protonmail.com",
          this._uw.order.subtotal=this._uw.order.amount;
          this._uw.order.amount=this._uw.order.amount+(this._uw.order.amount*12/100);
          this.router.navigate(['/checkout']);
          }

      this._uw.errorFormSendOrder=false;
      
     
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
    this.ngFormAddOrder = this.formBuilder.group({
      name: ['', [Validators.required]] ,
      phone:['',[Validators.required]], 
      email:['',[Validators.required]], 
      address:['',[Validators.required]]
         });
    }
    
  get fval2() {
    return this.ngFormAddOrder.controls;
  }
  back(){
    this.selected=false;
  }

}

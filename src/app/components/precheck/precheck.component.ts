
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
  selector: 'app-precheck',
  templateUrl: './precheck.component.html',
  styleUrls: ['./precheck.component.css']
})


export class PrecheckComponent implements OnInit {

constructor(
	private dataApi: DataApiService,
	public _uw:UserWService,
	private location: Location,
    private formBuilder: FormBuilder,
    private router: Router
	) {}

	card:any;
	cardError:string;
	ccInfo:boolean=false;
	sent:boolean=false;
	succeeded:boolean=false;
  	public selDate = { date:1, month:1, year:1 };
  	ngFormAddOrder: FormGroup;
  	submitted = false;  
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

  ngOnInit() {
  	// console.log("dato" +this._uw.order.serviceType);
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






setCCInfo(){
	this.ccInfo=true;
}
go(){
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
          this._uw.order.email="penguinscleaningservice@gmail.com",
          this._uw.order.subtotal=this._uw.order.amount;
          this._uw.order.amount=this._uw.order.amount+(this._uw.order.amount*12/100);
          this.router.navigate(['/checkout']);
}
try(){
	 this.router.navigate(['/quote']);
}
 public aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }
  public okOrder(){
      this.submitted = true;
      // this.quoteSubmitted=true;
        if (this.ngFormAddOrder.invalid) {
          this._uw.errorFormSendOrder=true;
        return;
            } 
          }
end(){
	 this.router.navigate(['']);
}


	
}
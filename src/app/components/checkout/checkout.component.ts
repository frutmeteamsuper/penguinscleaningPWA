import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { UserWService } from '../../services/user-w.service';
import { DataApiService } from '../../services/data-api.service';
import { XunkCalendarModule } from '../../../xunk-calendar/xunk-calendar.module';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements AfterViewInit {

	@ViewChild('cardInfo', {static: false}) cardInfo:ElementRef;
	card:any;
	cardError:string;
	ccInfo:boolean=false;
	sent:boolean=false;
	succeeded:boolean=false;
  public selDate = { date:1, month:1, year:1 };

  ngOnInit() {
this.selDate = XunkCalendarModule.getToday();  
  }

  ngAfterViewInit() {
  	  
  	this.card=elements.create('card',{
	  style: {
	    base: {
	      iconColor: '#666EE8',
	      color: '#31325F',
	      lineHeight: '40px',
	      fontWeight: 300,
	      fontFamily: 'Helvetica Neue',
	      fontSize: '15px',

	      '::placeholder': {
	        color: '#CFD7E0',
	      },
	    },
	  }
	});
  	this.card.mount(this.cardInfo.nativeElement);
  	this.card.addEventListener('change', this.onChange.bind(this));
  }

  onChange({error}){
if (error){
	this.ngZone.run(()=>this.cardError=error.message);
	
	}
	else {
	this.ngZone.run(()=>this.cardError=null);
	}
  }



setCCInfo(){
	this.ccInfo=true;
}
try(){
	 this.router.navigate(['/quote']);
}
end(){
	 this.router.navigate(['']);
}

constructor(
	private ngZone: NgZone,
	private dataApi: DataApiService,
	public _uw:UserWService,
	private location: Location,

    private router: Router
	) {}
	async onClick(){
		let response:any;
		this._uw.order.date=this.selDate.date+" /"+(this.selDate.month+1)+" /"+this.selDate.year;
		this._uw.order.serviceDescription= this._uw.order.serviceType+" cleaning "+"("+this._uw.order.houseSize+")";
 		const {token, error} = await stripe.createToken(this.card);
 		if (token){
 			this.sent=true;
 			// console.log(token);
 			 response = await this.dataApi.charge(this._uw.order.amount, token.id, this._uw.order.serviceDescription,this._uw.order.email);
 			// console.log(response);
 			if (response.status=="succeeded"){
 				// console.log("todo bien");
 				this.sent=true;
 				this._uw.order.orderType="appointment";
	         	this.dataApi.saveOrder(this._uw.order).subscribe();
 			}else{
 		
 		}

 		}else{
 			this.ngZone.run(()=>this.cardError=error.message);
 		}
	}
}

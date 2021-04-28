import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { UserWService } from '../../services/user-w.service';
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

constructor(private ngZone: NgZone,
	    public _uw:UserWService ) { }

async onClick(){
 const {token, error} = await stripe.createToken(this.card);
 if (token){
 	console.log(token);
 }else{
 	this.ngZone.run(()=>this.cardError=error.message);
 }
}

}

import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from  '@angular/common/http';
import { isError } from "util";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { UserWService } from '../../services/user-w.service';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';
import { ContactInterface } from '../../models/contact-interface';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
 public scrollTopService:ScrollTopService,
    private http: HttpClient,
    public _uw:UserWService, 
    private dataApiService: DataApiService,
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder
  	) { }
  ngFormAddContact: FormGroup;
  submitted = false;
  public contacts:ContactInterface;
  public contact : ContactInterface={
    name:"",
    message:"",
    phone:"", 
    email:"",
    subject:"",
    organization:""
  };


sendContact(){
	this.submitted = true;
	if (this.ngFormAddContact.invalid) {
		this._uw.errorFormSendContact=true;
	return;
	    } 
	this._uw.errorFormSendContact=false;
	this.contact = this.ngFormAddContact.value;
	this._uw.contact.name=this.contact.name;
	this._uw.contact.organization=this.contact.organization;
	this._uw.contact.clientEmail=this.contact.email;
  this._uw.contact.phone=this.contact.phone;
	this._uw.contact.messageSubject=this.contact.subject;
	this._uw.contact.message=this.contact.message;
  this._uw.contact.subject="Your have a new contact request";
	// email del admin
	this._uw.contact.email="penguinscleaningservice@gmail.com"; 

	this.dataApiService.sendMailNewContactAA(this._uw.contact).subscribe();
  this.dataApiService.saveContact(this._uw.contact).subscribe(
        );
}
 ngOnInit() {
    this.ngFormAddContact = this.formBuilder.group({
      name: ['', [Validators.required]] ,
      organization: ['', [Validators.required]] ,
      phone:['',[Validators.required]], 
      email:['',[Validators.required]], 
      subject:['',[Validators.required]], 
      message:['',[Validators.required]]
         });
    }
    
  get fval2() {
    return this.ngFormAddContact.controls;
  }

}

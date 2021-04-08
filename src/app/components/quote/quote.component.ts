import { Component, OnInit } from '@angular/core';

import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { DemoFilePickerAdapter } from  '../../file-picker.adapter';
import { FilePickerComponent } from '../../../assets/file-picker/src/lib/file-picker.component';
import { FilePreviewModel } from '../../../assets/file-picker/src/lib/file-preview.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { isError } from "util";
import { PagoInterface } from '../../models/pago-interface'; 
import { OrderInterface } from '../../models/order-interface';

import { UserWService } from '../../services/user-w.service';
import { DataApiService } from '../../services/data-api.service';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
	 adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

  constructor(
    public scrollTopService:ScrollTopService,
    private http: HttpClient,
    public _uw:UserWService, 
    private dataApiService: DataApiService,
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder
  	) { }

 public tixs:TixInterface;
 public isError = false;
  public orders:OrderInterface;
  public order:OrderInterface;  
  public pagoImage:any[]=[];
  public images:any[]=[];
  public pago : PagoInterface ={
        pagoImage:[],
      npedido:""
    };
  

  ngOnInit() {
  	
  }

}

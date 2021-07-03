import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { XunkCalendarModule } from '../xunk-calendar/xunk-calendar.module';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpClientModule } from '@angular/common/http';
//RUTAS
import { app_routing } from "./app.routes";       
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//SERVICES
import {TixsService} from './services/tixs.service';
import {ProductInfoService} from './services/product-info.service';
import {CarService} from './services/car.service';
import {DataApiService} from './services/data-api.service';
import {ScrollTopService} from './services/scroll-top.service';
import {UserWService} from './services/user-w.service';
import {IpbucketService} from './services/ipbucket.service';
//ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';


import { FilePickerModule } from  '../assets/file-picker/src/public_api';
//COMPONENTS
import { TestappComponent } from './components/testapp/testapp.component';
import { Component, Inject} from '@angular/core';
import { PagoComponent } from './components/pago/pago.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MenuComponent } from './components/menu/menu.component';
import { HouseComponent } from './components/house/house.component';
import { OfficeComponent } from './components/office/office.component';
import { EventsComponent } from './components/events/events.component';
import { CommercialComponent } from './components/commercial/commercial.component';
import { CommercialoneComponent } from './components/commercialone/commercialone.component';
import { CommercialtwoComponent } from './components/commercialtwo/commercialtwo.component';
import { CommercialthreeComponent } from './components/commercialthree/commercialthree.component';
import { CommercialfourComponent } from './components/commercialfour/commercialfour.component';
import { CommercialfiveComponent } from './components/commercialfive/commercialfive.component';
import { CovidComponent } from './components/covid/covid.component';
import { CarpetComponent } from './components/carpet/carpet.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SuccessComponent } from './components/success/success.component';
import { ProjectoneComponent } from './components/projectone/projectone.component';
import { ProjecttwoComponent } from './components/projecttwo/projecttwo.component';
import { ProjectthreeComponent } from './components/projectthree/projectthree.component';
import { ProjectfourComponent } from './components/projectfour/projectfour.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PrecheckComponent } from './components/precheck/precheck.component';
import { ProjectdetailComponent } from './components/projectdetail/projectdetail.component';
import { PrjtsComponent } from './components/prjts/prjts.component';

@NgModule({
  declarations: [
    AppComponent,
    TestappComponent,
    PagoComponent,
    TopbarComponent,
    FooterComponent,
    CompanyComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    MenuComponent,
    HouseComponent,
    OfficeComponent,
    EventsComponent,
    CommercialComponent,
    CommercialoneComponent,
    CommercialtwoComponent,
    CommercialthreeComponent,
    CommercialfourComponent,
    CommercialfiveComponent,
    CovidComponent,
    CarpetComponent,
    QuoteComponent,
    SuccessComponent,
    ProjectoneComponent,
    ProjecttwoComponent,
    ProjectthreeComponent,
    ProjectfourComponent,
    GalleryComponent,
    CheckoutComponent,
    PrecheckComponent,
    ProjectdetailComponent,
    PrjtsComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    HttpModule,
    app_routing,
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule,
    ArchwizardModule,
    CarouselModule,
    XunkCalendarModule,
    FilePickerModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
  entryComponents:[ ],
  providers: [
    TixsService,
    DataApiService,
    ScrollTopService,
    UserWService,
    IpbucketService,
      ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

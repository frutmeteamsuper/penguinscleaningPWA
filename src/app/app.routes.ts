import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,
	FooterComponent,
	CompanyComponent,
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
	ContactComponent,
	CovidComponent,
	CarpetComponent,
	TopbarComponent,
	PagoComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'topbar',component:TopbarComponent},
	{path:'footer',component:FooterComponent},
	{path:'company',component:CompanyComponent},
	{path:'menu',component:MenuComponent},
	{path:'house',component:HouseComponent},
	{path:'office',component:OfficeComponent},
	{path:'events',component:EventsComponent},
	{path:'commercial',component:CommercialComponent},
	{path:'commercialone',component:CommercialoneComponent},
	{path:'commercialtwo',component:CommercialtwoComponent},
	{path:'commercialthree',component:CommercialthreeComponent},
	{path:'commercialfour',component:CommercialfourComponent},
	{path:'commercialfive',component:CommercialfiveComponent},
	{path:'contact',component:ContactComponent},
	{path:'carpet',component:CarpetComponent},
	{path:'covid',component:CovidComponent},
	{path:'pago',component:PagoComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);


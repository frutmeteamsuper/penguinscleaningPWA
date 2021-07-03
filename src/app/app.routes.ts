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
	QuoteComponent,
	ContactComponent,
	CovidComponent,
	CarpetComponent,
	TopbarComponent,
	PagoComponent,
	ProjectsComponent,
	PrjtsComponent,
	ProjectoneComponent,
	ProjecttwoComponent,
	ProjectthreeComponent,
	ProjectfourComponent,
	GalleryComponent,
	PrecheckComponent,
		ProjectdetailComponent,

	CheckoutComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'topbar',component:TopbarComponent},
	{path:'footer',component:FooterComponent},
	{path:'company',component:CompanyComponent},
	{path:'checkout',component:CheckoutComponent},
	{path:'menu',component:MenuComponent},
	{path:'house',component:HouseComponent},
	{path:'office',component:OfficeComponent},
	{path:'events',component:EventsComponent},
	{path:'quote',component:QuoteComponent},
		{path:'projectdetail/:id',component:ProjectdetailComponent},
	{path:'projects',component:ProjectsComponent},
	{path:'prjts',component:PrjtsComponent},
	{path:'projectone',component:ProjectoneComponent},
	{path:'projecttwo',component:ProjecttwoComponent},
	{path:'projectthree',component:ProjectthreeComponent},
	{path:'projectfour',component:ProjectfourComponent},
	{path:'gallery',component:GalleryComponent},
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
	{path:'precheck',component:PrecheckComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);


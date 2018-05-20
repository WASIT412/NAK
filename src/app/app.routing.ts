import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {  HomeComponent } from './home/home.component';
import {  HotelComponent } from './hotel/hotel.component';

const routes: Routes = [
  
{ path: '', component:HomeComponent, data: 
{breadcrumb: 'Home', title: 'Dashboard', nav: true, auth: true}},
{ path: 'hotel', component: HotelComponent, data: 
{breadcrumb: 'Home', title: 'Dashboard', nav: true, auth: true}},
  
//  {breadcrumb: 'Ledger', title: 'Ledger', nav: true, auth: true}},
// {
//   path: 'administration',loadChildren: () => AdministrationModule,
//   //loadChildren: './administration/administration.module#AdministrationModule',
//   data: {breadcrumb: 'Administration', title: 'Administration', nav: true, auth: true}
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // , { enableTracing: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
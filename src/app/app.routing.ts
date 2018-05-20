import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {  HomeComponent } from './home/home.component';
import {  HeaderComponent } from './framework/common/header/header.component';
import {  FooterComponent } from './framework/common/footer/footer.component';
const routes: Routes = [
 // {path: 'ledger', loadChildren: './ledger/ledger.module#LedgerModule',
// data: {breadcrumb: 'Ledger', title: 'Ledger', nav: true, auth: true}}
{ path: '', component:HomeComponent, data: 
{breadcrumb: 'Home', title: 'Dashboard', nav: true, auth: true}},

//   { path: 'ledger', loadChildren: () => LedgerModule, data: 
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
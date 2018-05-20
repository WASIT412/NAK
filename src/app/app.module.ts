import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { CyberintechControlsModule } from './framework/controls/controls.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './framework/common/header/header.component';
import { FooterComponent } from './framework/common/footer/footer.component';
import { AppRoutingModule } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CyberintechControlsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

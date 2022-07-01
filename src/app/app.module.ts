import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictComponent } from './district/district.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import{HttpClientModule} from "@angular/common/http";
import { LsgComponent } from './lsg/lsg.component'

@NgModule({
  declarations: [
    AppComponent,
    DistrictComponent,
    HomeComponent,
    NavBarComponent,
    LsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

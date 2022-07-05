import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictComponent } from './district/district.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule} from "@angular/common/http";
import { LsgComponent } from './lsg/lsg.component';
import { AboutComponent } from './about/about.component';
import { CreditsComponent } from './credits/credits.component'

@NgModule({
  declarations: [
    AppComponent,
    DistrictComponent,
    HomeComponent,
    LsgComponent,
    AboutComponent,
    CreditsComponent
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

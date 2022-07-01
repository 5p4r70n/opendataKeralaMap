import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictComponent } from './district/district.component';
import { HomeComponent } from './home/home.component';
import { LsgComponent } from './lsg/lsg.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:":district",component:DistrictComponent},
  {path:":district/:lsgId/:qid",component:LsgComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

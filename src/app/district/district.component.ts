import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { DistrictDataGenService } from '../district-data-gen.service';


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  districtName : string="";

  lhh : any;
  // lsg=lsgData

  constructor(private route : ActivatedRoute,private httpClient:HttpClient,) {}

  ngOnInit(): void {

    this.districtName = this.route.snapshot.params["district"]
    this.httpClient.get<any> ("assets/json/"+this.districtName+".json").subscribe((data)=>this.lhh=data)
    console.log(this.districtName)

  }

        
  
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScriptServiceService } from '../script-service.service';
// import * as leaflet from "../../assets/main.js";

const SCRIPT_PATH = '../../assets/main.js';
declare let gapi: any;

@Component({
  selector: 'app-lsg',
  templateUrl: './lsg.component.html',
  styleUrls: ['./lsg.component.css']
})
export class LsgComponent implements OnInit {

  lsgName:string=""
  districtName:string=""
  qid:string=""
  lsgdata:any;



  constructor(  private route : ActivatedRoute,
                private httpClient:HttpClient,
                private renderer: Renderer2,
                private scriptService: ScriptServiceService
              ) { }

  ngOnInit(): void {

    this.lsgName = this.route.snapshot.params["lsgId"]
    this.districtName=this.route.snapshot.params["district"]
    this.qid=this.route.snapshot.params["qid"]

    this.httpClient.get<any> ("assets/"+this.districtName+".json").subscribe((data)=>{
      for (let res of data){
          if (res.id ==this.qid){
            this.lsgdata = res
          }
      }
    })


    // console.log(this.lsgName)
    // console.log(this.districtName)
    // console.log(this.qid)



    //script service
    const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH);
    scriptElement.onload = () => {
      console.log('Google API Script loaded');
      // console.log(gapi);
    // gapi.load('client', this.init);
    }
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }


  }

}

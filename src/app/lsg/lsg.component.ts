import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScriptServiceService } from '../script-service.service';
// import * as leaflet from "../../assets/main.js";

const SCRIPT_PATH = '../../assets/js/main.js';
// const gTag="https://www.googletagmanager.com/gtag/js?id=G-VZQ4QMZRSC";


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
              ){}

  

  ngOnInit(): void {

    this.lsgName = this.route.snapshot.params["lsgId"]
    this.districtName=this.route.snapshot.params["district"]
    this.qid=this.route.snapshot.params["qid"]

    this.httpClient.get<any> ("assets/json/"+this.districtName+".json").subscribe((data)=>{
      console.log("dfsdfsdfsfd")
      for (let res of data){
          if (res.id ==this.qid){
            this.lsgdata = res
            break;
          }
      }
    })


    // const scriptElement2 = this.scriptService.loadJsScript(this.renderer, gTag);
    // scriptElement2.onload = () => {  }
    // scriptElement2.onerror = () => {
    //   console.log('Could not load the g tag Script!');
    // }


  }

      
ngAfterViewInit(): void{

  //script service
  const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH);
  scriptElement.onload = () => { 
    console.log("Main js added")
   }
  scriptElement.onerror = () => {
    console.log('Could not load the MAIn JS Script!');
  }

  
}


}

import { Injectable } from '@angular/core';
import * as lsgData from "../assets/lsg.json"

@Injectable({
  providedIn: 'root'
})
export class DistrictDataGenService {
  
  lsg=lsgData
  constructor() { }


}

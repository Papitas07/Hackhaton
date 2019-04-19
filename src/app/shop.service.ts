import { Injectable } from '@angular/core';
import { EasterApiService } from './easter-api.service';
import { eggsProperty } from './easter-api.service'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ShopService {

public eggs 
public egg
public legendary
public fromMerchandEgged = []
public stockEggs = []
constructor(public myEgg: EasterApiService, public http: HttpClient) { }



  //logique marchand vers stock du trader

  //getLegendaryEgg(){
   // if this.eggs.includes()
  //}
 giveEgg(){

  return this.fromMerchandEgged

 }
givestockEggs(){

  return this.stockEggs
}
  

 



}

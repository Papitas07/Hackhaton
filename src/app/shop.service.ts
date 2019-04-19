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
public toMerchand = []

constructor(public myEgg: EasterApiService, public http: HttpClient) { }



  //logique marchand vers stock du trader

  //getLegendaryEgg(){
   // if this.eggs.includes()
  //}
 giveEgg(){

  return this.fromMerchandEgged

 }

  buyEgg(egg) {

    const index = this.fromMerchandEgged.findIndex( x => x.id === egg.id);
   // Supression de l'article du tableau
   this.toMerchand.splice(index, 1);
   this.fromMerchandEgged.push(egg)
   console.log(this.fromMerchandEgged)
  
  }


//Restore function stock-trader to shop
  sellEgg(egg) {
    const index = this.fromMerchandEgged.findIndex( x => x.id === egg.id);
   // Supression de l'article du tableau
   this.fromMerchandEgged.splice(index, 1);
   this.toMerchand.push(egg)
   console.log(this.toMerchand)
}



 



}

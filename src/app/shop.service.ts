import { Injectable } from '@angular/core';
import { EasterApiService } from './easter-api.service';
import { eggsProperty } from './easter-api.service'
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ShopService {

public eggs 
public egg
public legendary

constructor(public myEgg: EasterApiService, public http: HttpClient) { }



  //logique marchand vers stock du trader

  //getLegendaryEgg(){
   // if this.eggs.includes()
  //}

  createEgg(egg) {
    // Ajout de l'article à la liste des articles
    this.eggs.push(egg);
    // Réinitialisation du model
    this.egg = new eggsProperty()
  }

  deleteEgg(egg) {

    const index = this.eggs.findIndex( x => x.id === egg.id);
   // Supression de l'article du tableau
   this.eggs.splice(index, 1);

  }
 


}

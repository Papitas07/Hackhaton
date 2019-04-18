import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { EasterApiService, eggsProperty } from '../easter-api.service';

@Component({
  selector: 'app-stock-trader',
  templateUrl: './stock-trader.component.html',
  styleUrls: ['./stock-trader.component.scss']
})
export class StockTraderComponent implements OnInit {

  public fromMerchandEgged = []
  public eggOne
  public egg2
  public egg3
  public egg4
  public egg5
  public egg6
  public egg7
  public egg8
  public legendaryEgg

  constructor(public shop: ShopService, public eggs:EasterApiService) { 

  }

  ngOnInit() {

    this.eggs.getEggOne().subscribe(result=> {
      this.eggOne=result


    })
    this.eggs.getEgg2().subscribe(result=> {
      this.egg2=result


    })
    this.eggs.getEgg3().subscribe(result=> {
      this.egg3=result


    })
    this.eggs.getEgg4().subscribe(result=> {
      this.egg4=result

 
      this.eggs.getEgg5().subscribe(result=> {
        this.egg5=result
  
  
      })
      this.eggs.getEgg6().subscribe(result=> {
        this.egg6=result
  
  
      })
      this.eggs.getEgg7().subscribe(result=> {
        this.egg7=result
  
  
      })
      this.eggs.getEgg8().subscribe(result=> {
        this.egg8=result
  
  
      })
      this.eggs.getLegendaryEgg().subscribe(result=> {
        this.legendaryEgg = result
      })

    })
  
      

  }


  buyEgg(egg) {
    // Ajout de l'article à la liste des articles
    this.fromMerchandEgged.push(egg);
    // Réinitialisation du model
   
    console.log(this.fromMerchandEgged)
  }

sellEgg(egg) {
    const index = this.fromMerchandEgged.findIndex( x => x.id === egg.id);
   // Supression de l'article du tableau
   this.fromMerchandEgged.splice(index, 1);
   console.log(this.fromMerchandEgged)
}
}

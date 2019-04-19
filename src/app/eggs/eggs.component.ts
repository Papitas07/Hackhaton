import { Component, OnInit } from '@angular/core';
import { EasterApiService } from '../easter-api.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.scss']
})
export class EggsComponent implements OnInit {
  
  public allEggs
  public eggOne
  public egg2
  public egg3
  public egg4
  public egg5
  public egg6
  public egg7
  public egg8
  public legendaryEgg
  public allMerchandEggs = []

  constructor(public eggs: EasterApiService, public shop:ShopService) { }

  ngOnInit() {

    
    this.eggs.getEggOne().subscribe(result=> {
      this.allMerchandEggs.push(result)
      this.eggOne.priceMilk = 10
      this.eggOne.priceChocolate = 23
      this.eggOne.priceEgg = 15
      console.log(this.allMerchandEggs)
      
      
      })
      this.eggs.getEgg2().subscribe(result=> {
      this.allMerchandEggs.push(result)
      this.egg2.priceMilk = 33 
      this.egg2.priceChocolate = 24
      this.egg2.priceEgg = 12
      
      
      })
      this.eggs.getEgg3().subscribe(result=> {
      this.allMerchandEggs.push(result)
      this.egg3.priceMilk = 12
      this.egg3.priceChocolate = 45
      this.egg3.priceEgg = 24
      
      
      })
      this.eggs.getEgg4().subscribe(result=> {
      this.allMerchandEggs.push(result)
      this.egg4.priceMilk = 23
      this.egg4.priceChocolate = 65
      this.egg4.priceEgg = 11
      
      
      
      this.eggs.getEgg5().subscribe(result=> {
      this.allMerchandEggs.push(result)
      this.egg5.priceMilk = 34
      this.egg5.priceChocolate = 14
      this.egg5.priceEgg = 12
      
      
      
      })
      this.eggs.getEgg6().subscribe(result=> {
      this.allMerchandEggs.push(result)
      this.egg6.priceMilk = 14
      this.egg6.priceChocolate= 29
      this.egg6.priceEgg = 17
      
      
      })
      this.eggs.getEgg7().subscribe(result=> {
      this.allMerchandEggs.push(result)
      this.egg7.priceMilk = 36
      this.egg7.priceChocolate = 32
      this.egg7.priceEgg = 17
      
      
      })
      this.eggs.getEgg8().subscribe(result=> {
      this.allMerchandEggs.push(result)
      this.egg8.priceMilk = 21
      this.egg8.priceChocolate = 32
      this.egg8.priceEgg = 5
      
      
      
      })
      this.eggs.getLegendaryEgg().subscribe(result=> {
        this.legendaryEgg = result
      })

    })
    this.allMerchandEggs
  }

  sellEgg(egg) {
    const index = this.allMerchandEggs.findIndex( x => x.id === egg.id);
   // Supression de l'article du tableau
   this.allMerchandEggs.splice(index, 1);
   this.shop.stockEggs.push(egg)
   
}
}
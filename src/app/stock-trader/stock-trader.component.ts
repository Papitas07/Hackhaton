import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { EasterApiService, eggsProperty } from '../easter-api.service';

@Component({
  selector: 'app-stock-trader',
  templateUrl: './stock-trader.component.html',
  styleUrls: ['./stock-trader.component.scss']
})
export class StockTraderComponent implements OnInit {


  public stock = {

    totalMoney: 5000,
    milk:0,
    chocolate:0,
    egg:0

  }
  public canBuy = 1
  public interval 
  public timestamp
  public milkPrice
  public chocolatePrice
  public eggPrice
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

  sellMilk(){
    if (this.stock.milk > 0){
      this.stock.milk -= 1
      this.stock.totalMoney+= this.milkPrice
      console.log(this.stock.totalMoney)
    }
    else{
      alert("You dont have any milk to sell")
      console.log(this.stock.totalMoney)
    }

  }

  sellChocolate(){
    if (this.stock.chocolate > 0 ){
      this.stock.chocolate -= 1
      this.stock.totalMoney+= this.chocolatePrice
      console.log(this.stock.totalMoney)
    }
    else{
      alert("You dont have any chocolate to sell")
      console.log(this.stock.totalMoney)
    }

  }

  sellEgg(){
    if (this.stock.egg > 0 ){
      this.stock.egg -= 1
      this.stock.totalMoney += this.eggPrice
    }
    else{
      alert("You dont have any egg to sell")
      console.log(this.stock.totalMoney)
    }

  }

  buyMilk(){

  if((this.stock.totalMoney-this.milkPrice) > 0  && this.canBuy === 1){
    this.stock.milk += 1
    this.stock.totalMoney -=  this.milkPrice
    console.log(this.stock.totalMoney)
  }
  else{
    alert('You cant afford this !')
    console.log(this.stock.totalMoney)
  }
  }

  buyChocolate(){

    if((this.stock.totalMoney-this.chocolatePrice) > 0  && this.canBuy === 1){
    this.stock.chocolate += 1
    this.stock.totalMoney -= this.chocolatePrice
    console.log(this.stock.totalMoney)

  }
  else{
    alert('You cant afford this !')
    console.log(this.stock.totalMoney)
  }
  }
  someEgg(){

    if((this.stock.totalMoney-this.eggPrice ) > 0  && this.canBuy === 1){
    this.stock.egg += 1
    this.stock.totalMoney -= this.eggPrice
    console.log(this.stock.totalMoney)

    }
    else{
      alert('You cant afford this !')
      console.log(this.stock.totalMoney)
    }
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

    this.timestamp = new Date();
      this.interval = 1000


      this.eggs.getMilk(this.timestamp, this.interval).subscribe(result => {
        this.milkPrice=result[0].price
      });
      this.eggs.getChocolate(this.timestamp, this.interval).subscribe(result => {
        this.chocolatePrice = result[0].price;
      });
      this.eggs.getEggs(this.timestamp, this.interval).subscribe(result => {
        this.eggPrice = result[0].price;
      
  });
      this.getEgg()

  }

  getEgg(){
    this.fromMerchandEgged = this.shop.giveEgg()
  }


}

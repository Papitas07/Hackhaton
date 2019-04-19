import { Component, OnInit } from '@angular/core';
import { EasterApiService } from '../easter-api.service';

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

  constructor(private eggs: EasterApiService) { }

  ngOnInit() {

    this.eggs.getEggOne().subscribe(result=> {
      this.allMerchandEggs.push(result)
      console.log(this.allMerchandEggs)


    })
    this.eggs.getEgg2().subscribe(result=> {
      this.allMerchandEggs.push(result)


    })
    this.eggs.getEgg3().subscribe(result=> {
      this.allMerchandEggs.push(result)


    })
    this.eggs.getEgg4().subscribe(result=> {
      this.allMerchandEggs.push(result)

 
      this.eggs.getEgg5().subscribe(result=> {
        this.allMerchandEggs.push(result)
  
  
      })
      this.eggs.getEgg6().subscribe(result=> {
        this.allMerchandEggs.push(result)
  
  
      })
      this.eggs.getEgg7().subscribe(result=> {
        this.allMerchandEggs.push(result)
  
  
      })
      this.eggs.getEgg8().subscribe(result=> {
        this.allMerchandEggs.push(result)
  
  
      })
      this.eggs.getLegendaryEgg().subscribe(result=> {
        this.legendaryEgg = result
      })

    })
    this.allMerchandEggs
  }
}
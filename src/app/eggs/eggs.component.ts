import { Component, OnInit } from '@angular/core';
import { EasterApiService } from '../easter-api.service';

@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.scss']
})
export class EggsComponent implements OnInit {
  
  public allEggs


  constructor(private easterEgg: EasterApiService) { }

  ngOnInit() {

    this.easterEgg.getAllEggs().subscribe(result => {
      this.allEggs=result
  }


    )}}
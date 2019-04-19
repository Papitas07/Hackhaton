import { Component, OnInit } from '@angular/core';
import { EasterApiService } from '../easter-api.service'

@Component({
  selector: 'app-marchand',
  templateUrl: './marchand.component.html',
  styleUrls: ['./marchand.component.scss']
})
export class MarchandComponent implements OnInit {

  
  constructor(public eggs:EasterApiService) { }

  ngOnInit() {

   
}

  }



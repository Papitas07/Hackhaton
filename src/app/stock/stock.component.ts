import { Component, OnInit } from '@angular/core';
import { EasterApiService} from '../easter-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
 
  constructor() { 
  }
 
  ngOnInit() {
    
  }

}

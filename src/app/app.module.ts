import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { EasterApiService } from './easter-api.service';
import { CoursComponent } from './cours/cours.component';
import { StockTraderComponent } from './stock-trader/stock-trader.component';
import { ShopDirective } from './shop.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    StockTraderComponent,
    ShopDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [EasterApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

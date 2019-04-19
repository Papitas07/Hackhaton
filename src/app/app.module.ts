import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { EasterApiService } from './easter-api.service';
import { CoursComponent } from './cours/cours.component';
import { StockTraderComponent } from './stock-trader/stock-trader.component';
import { ShopDirective } from './shop.directive';
import { MarchandComponent } from './marchand/marchand.component';
import { RouterModule } from '@angular/router'
import { ROUTES } from './app-routes';
import { EggsComponent } from './eggs/eggs.component';
import { ShopService } from './shop.service'
import { GeneralComponent } from './general/general.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    StockTraderComponent,
    ShopDirective,
    MarchandComponent,
    EggsComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),

   
  ],
  providers: [EasterApiService,ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }

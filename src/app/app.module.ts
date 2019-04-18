import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { formatDate } from './helpers/date';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { EasterApiService } from './easter-api.service';

@NgModule({
  declarations: [
    AppComponent
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

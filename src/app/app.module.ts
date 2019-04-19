import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { EasterApiService } from './easter-api.service';
import { CoursComponent } from './cours/cours.component';
import { ChartsModule } from 'ng2-charts'; 


@NgModule({
  declarations: [
    AppComponent,
    CoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
   
  ],
  providers: [EasterApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

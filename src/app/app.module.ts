import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { EasterApiService } from './easter-api.service';
import { CoursComponent } from './cours/cours.component';
import { MarchandComponent } from './marchand/marchand.component';
import { RouterModule } from '@angular/router'
import { ROUTES } from './app-routes';
import { EggsComponent } from './eggs/eggs.component';
import { GeneralComponent } from './general/general.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
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
  providers: [EasterApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

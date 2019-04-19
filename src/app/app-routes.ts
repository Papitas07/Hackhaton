import { Routes, Router } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { MarchandComponent } from './marchand/marchand.component'
import { Component } from '@angular/core';
import { EggsComponent } from './eggs/eggs.component'



export { ROUTES };
const ROUTES: Routes = [
    
    { path: 'route', component: Router},
    {path: 'marchand', component: MarchandComponent},
    { path: 'cours', component: CoursComponent},
    { path: 'eggs', component: EggsComponent},
    {path: '', redirectTo: '/general', pathMatch: 'full'}
];
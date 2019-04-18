import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './cours/cours.component'

const routes: Routes = [
  {
    path: 'courscomponent/:day',
    component:CoursComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzadetailsComponent } from './pizzadetails/pizzadetails.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';

const routes: Routes = [
  {
    path: '',
        pathMatch: 'full',component:PizzalistComponent
  },
  {path: 'details', component: PizzadetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

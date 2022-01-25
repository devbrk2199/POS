import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { PizzadetailsComponent } from './pizzadetails/pizzadetails.component';
import { SharedPropertyService } from './shared-property.service';
import { PizzalistComponent } from './pizzalist/pizzalist.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    PizzadetailsComponent,
    PizzalistComponent,
    
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [SharedPropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

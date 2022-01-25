import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedPropertyService } from '../shared-property.service';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css']
})
export class PizzalistComponent implements OnInit {
  pizzaList: any = [];
  searchText :any;
  activePizza = {};
  property: any;
  constructor(private httpClient: HttpClient,private sharedPropertyService: SharedPropertyService, private router: Router){

  }
  ngOnInit(){
    this.httpClient.get("assets/pizza.json").subscribe(data =>{
      console.log(data);
      this.pizzaList = data;
    })
  }

  changeActivePizza(index :any){
     this.sharedPropertyService.rowName=index;
     this.router.navigate(['/details']);
  } 
}



import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedPropertyService } from '../shared-property.service';

@Component({
  selector: 'app-pizzadetails',
  templateUrl: './pizzadetails.component.html',
  styleUrls: ['./pizzadetails.component.css']
})
export class PizzadetailsComponent implements OnInit {
  activePizza :any;
  constructor(private httpClient: HttpClient,private sharedPropertyService: SharedPropertyService, private router: Router){
    this.activePizza=this.sharedPropertyService.rowName;
  }

  ngOnInit(): void {
  }


  close(){
    this.router.navigate(['/']);
  }
}

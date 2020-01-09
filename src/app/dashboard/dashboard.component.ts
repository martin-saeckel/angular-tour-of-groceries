import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  groceries: Grocery[] = [];

  constructor(private groceryService: GroceryService) { }

  ngOnInit() {
    this.getGroceries();
  }

  getGroceries(): void {
    this.groceryService.getGroceries()
      .subscribe(groceries => this.groceries = groceries.slice(1, 5));
  }
}
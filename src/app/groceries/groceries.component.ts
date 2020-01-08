import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  constructor(private groceryService: GroceryService) { }

  groceries: Grocery[];

  onSelect(grocery: Grocery): void {
    this.selectedGrocery = grocery;
  }

  ngOnInit() {
    this.getGroceries();
  }

  getGroceries(): void {
    this.groceryService.getGroceries()
      .subscribe(groceries => this.groceries = groceries);
  }
}
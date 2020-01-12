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

  ngOnInit() {
    this.getGroceries();
  }

  getGroceries(): void {
    this.groceryService.getGroceries()
      .subscribe(groceries => this.groceries = groceries);
  }

  add(name: string, price: number): void {
    name = name.trim();
    if(!name) { return; }
    if(!price) { return; }
    this.groceryService.addGrocery({ name, price } as Grocery)
      .subscribe(grocery => {
        this.groceries.push(grocery);
      });
  }

  delete(grocery: Grocery): void {
    this.groceries = this.groceries.filter(h => h !== grocery);
    this.groceryService.deleteGrocery(grocery).subscribe();
  }
}
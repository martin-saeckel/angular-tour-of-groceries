import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery';
import { GROCERIES } from '../mock-groceries';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  constructor() { }

  groceries = GROCERIES;

  grocery = Grocery = {
    id: 1,
    name: 'Toilettenpapier'
  };

  onSelect(grocery: Grocery): void {
    this.selectedGrocery = grocery;
  }

  ngOnInit() {

  }
}
import { Component, OnInit, Input } from '@angular/core';
import { Grocery } from '../grocery';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: [ './grocery-detail.component.css' ]
})

export class GroceryDetailComponent {
  @Input() grocery: Grocery;
  
  constructor() {}

  ngOnInit() {
    
  }
}
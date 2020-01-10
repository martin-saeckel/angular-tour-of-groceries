import { Component, OnInit, Input } from '@angular/core';
import { Grocery } from '../grocery';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: [ './grocery-detail.component.css' ]
})

export class GroceryDetailComponent {
  @Input() grocery: Grocery;
  
  constructor(
    private route: ActivatedRoute,
    private groceryService: GroceryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getGrocery();
  }

  getGrocery(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.groceryService.getGrocery(id)
      .subscribe(grocery => this.grocery = grocery);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.groceryService.updateGrocery(this.grocery)
      .subscribe(() => this.goBack());
  }
}
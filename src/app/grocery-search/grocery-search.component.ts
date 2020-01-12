import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTme, distinctUtilChanged, switchMap
} from 'rxjs/operators';

import { Grocery } from '../grocery';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-search',
  templateUrl: './grocery-search.component.html',
  styleUrls: [ './grocery-search.component.css' ]
})

export class GrocerySearchComponent implements OnInit {
  groceries$: Observable<Grocery[]>;
  private searchTerms = new Subject<string>();

  constructor(private groceryService: GroceryService) {
    search(term: string): void {
      this.searchTerms.next(term);
    }

    ngOnInit(): void {
      this.groceries$ = this.searchTerms.pipe(
        debounceTime(300),
        distinctUtilChanged(),
        switchMap((term: string) = this.groceryService.searchGroceries(term)),
      );
    }
  }
}
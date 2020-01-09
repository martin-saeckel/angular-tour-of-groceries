import { Injectable } from '@angular/core';
import { Grocery } from './grocery';
import { GROCERIES } from './mock-groceries';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

export class GroceryService {
  constructor(private messageService: MessageService) { }

  getGroceries(): Observable<Grocery[]> {
    this.messageService.add('GroceryService: Groceries fetched');
    return of (GROCERIES);
  }

  getGrocery(id: number): Observable<Grocery> {
    this.messageService.add(`GroceryService: fetched Grocery id=${id}`);
    return of(GROCERIES.find(grocery => grocery.id === id));
  }
}
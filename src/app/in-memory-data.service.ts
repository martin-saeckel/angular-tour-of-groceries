import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Grocery } from './grocery';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const groceries = [
      { id: 11, name: 'Toilettenpapier', price: 1.99 },
      { id: 12, name: 'Kaffee', price: 4.49 },
      { id: 13, name: 'Bier', price: 1.99 },
      { id: 14, name: 'Cornflakes', price: 2.99 },
      { id: 15, name: 'Brot', price: 2.99 }
    ];
    return {groceries};
  }

  genId(groceries: Grocery[]): number {
    return groceries.length > 0 ? Math.max(...groceries.map(grocery => grocery.id)) + 1 : 11;
  }
}
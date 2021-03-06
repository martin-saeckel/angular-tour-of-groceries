import { Injectable } from '@angular/core';
import { Grocery } from './grocery';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class GroceryService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  private groceriesUrl = 'api/groceries'; // URL to web api

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getGroceries(): Observable<Grocery[]> {
    this.messageService.add('GroceryService: Groceries fetched');
    return this.http.get<Grocery[]>(this.groceriesUrl)
      .pipe(
        //tap(_ => this.log('fetched groceries')),
        catchError(this.handleError<Grocery[]>('getGroceries', []))
      )
  }

  getGrocery(id: number): Observable<Grocery> {
    const url = `${this.groceriesUrl}/${id}`;
    return this.http.get<Grocery>(url).pipe(
      //tap(_ => this.log(`fetched grocery id=${id}`)),
      catchError(this.handleError<Grocery>(`getGrocery id=${id}`))
    )
    
    this.messageService.add(`GroceryService: fetched Grocery id=${id}`);
    return of(GROCERIES.find(grocery => grocery.id === id));
  }

  updateGrocery (grocery: Grocery): Observable<any> {
    return this.http.put(this.groceriesUrl, grocery, this.httpOptions).pipe(
      //tap(_ => this.log(`updated grocery id=${grocery.id}`)),
      catchError(this.handleError<any>('updateGrocery'))
    );
  }

  addGrocery (grocery: Grocery): Observable<Grocery> {
    return this.http.post<Grocery>(this.groceriesUrl, grocery, this.httpOptions).pipe(
      //tap((newGrocery: Grocery) => this.log(`added grocery w/ id=${newGrocery.id}`)),
      catchError(this.handleError<Grocery>('addGrocery'))
    );
  }

  deleteGrocery (grocery: Grocery | number): Observable<Grocery> {
    const id = typeof Grocery === 'number' ? grocery : grocery.id;
    const url = `${this.groceriesUrl}/${id}`;

    return this.http.delete<Grocery>(url, this.httpOptions).pipe(
      //tap(_ => this.log(`deleted grocery id= ${id}`)),
      catchError(this.handleError<Grocery>('deleteGrocery'))
    )
  }

  searchGroceries(term: string): Observable<Grocery[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Grocery[]>(`${this.groceriesUrl}/?name=${term}`).pipe(
      //tap(_ => this.log(`found groceries matching "${term}"`)),
      catchError(this.handleError<Grocery[]>('searchGroceries', []))
    );
  }
}
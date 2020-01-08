import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HelloComponent } from './hello.component';
import { GroceryDetailComponent } from './grocery-detail/grocery-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GroceriesComponent, GroceryDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

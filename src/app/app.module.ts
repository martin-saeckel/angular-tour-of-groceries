import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HelloComponent } from './hello.component';
import { GroceryDetailComponent } from './grocery-detail/grocery-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, GroceriesComponent, GroceryDetailComponent, MessagesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HelloComponent } from './hello.component';
import { GroceryDetailComponent } from './grocery-detail/grocery-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false }) ],
  declarations: [ AppComponent, HelloComponent, GroceriesComponent, GroceryDetailComponent, MessagesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

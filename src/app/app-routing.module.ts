import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesComponent } from './groceries/groceries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroceryDetailComponent } from './grocery-detail/grocery-detail.component';

const routes: Routes = [
  { path: 'groceries', component: GroceriesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: GroceryDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
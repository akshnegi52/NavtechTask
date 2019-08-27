import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { OrderItemComponent } from './orders/order-item/order-item.component';
import { EidtItemComponent } from './orders/eidt-item/eidt-item.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: UserLoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orderItem', component: OrderItemComponent },
  { path: 'order/:id', component: EidtItemComponent },

  {path : '**' ,redirectTo:'login'}

  // { path: 'edit-employee/:id', component: EmployeeEditComponent },
  // { path: 'employees-list', component: EmployeeListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

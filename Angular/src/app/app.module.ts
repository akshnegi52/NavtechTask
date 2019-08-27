import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { OrderItemComponent } from './orders/order-item/order-item.component';
import { EidtItemComponent } from './orders/eidt-item/eidt-item.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    UserLoginComponent,
    OrderItemComponent,
    EidtItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000,
        positionClass: 'toast-bottom-right'
      }
    ),
  ],
  exports :[ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  uri = "http://localhost:4000/";
  constructor(
    private http: HttpClient
  ) { }
//
  getAllOrders() {
    return this.http.get<any>(`${this.uri}ordersData`);
  }

  getSingleOrder(OrderNumber) {
    return this.http.post<any>(`${this.uri}orderData`, { orderNo: OrderNumber });
  }

  insertOrder(orderObj) {
    return this.http.post<any>(`${this.uri}addOrder`, orderObj);
  }

  editOrder(orderObj) {
    return this.http.post<any>(`${this.uri}editOrder`, orderObj)
  }
  deleteOrder(orderNumber) {
    return this.http.post<any>(`${this.uri}deleteOrder`, { id: orderNumber });
  }

}

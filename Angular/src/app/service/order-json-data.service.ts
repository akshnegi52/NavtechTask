import { Injectable } from '@angular/core';
import OrdersJsonData from '../../assets/OrdersData.json'
@Injectable({
  providedIn: 'root'
})
export class OrderJsonDataService {
  UserOder;
  OrdersData;
  constructor() {
     localStorage.setItem("OrdersList", JSON.stringify(OrdersJsonData));
     this.OrdersData =JSON.parse(localStorage.getItem("OrdersList"));
   }

//   var kittens = [
//     {"name": "fluffy", "color": "white" }, 
//     {"name": "luna", "color": "black" }
// ]

// // Save array in local storage as string
// localStorage.setItem("kittens",JSON.stringify(kittens));

// // Get back item "kittens" from local storage
// var kittensFromLocalStorage = JSON.parse(localStorage.getItem("kittens"));

// // Change value
// kittensFromLocalStorage[1].name = "jasmine";

// // Save the new item with updated value
// localStorage.setItem("kittens",JSON.stringify(kittensFromLocalStorage));


 

  getOrdersList(){
    return this.OrdersData;
  }
  getOrderWithnumber(Ordernumber)
  {
    this.OrdersData.forEach(Order => {
      if(Order.OrderNumber == Ordernumber){
        console.log("Dsaaflkdfa",Order);
         this.UserOder =  Order;
      }
      
    });
    return this.UserOder;
  }
  updateOrder(orderData){
    this.OrdersData.forEach(function (Order, index) {
      if(Order.OrderNumber == orderData.orderNumber){
        console.log("OrderNumberData From update Funtion",Order);
        this.OrdersData[index].OrderNumber = orderData.orderNumber;
        

         
      }
      
    });
    localStorage.setItem("OrdersList", JSON.stringify(this.OrdersData));
    return this.OrdersData;
  }
  ViewUser(OrderId){
      this.OrdersData.forEach(Order => {
        if(Order.OrderNumber == OrderId){
          console.log("Dsaaflkdfa",Order);
           this.UserOder =  Order;
        }
        
      });
      return this.UserOder;
  }
}

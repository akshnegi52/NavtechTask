import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
Data;
dataCount;
UserDetails;
  constructor(
    private orderService:OrdersService,
    private router:Router) { }

  ngOnInit() {
     this.orderService.getAllOrders().subscribe(data =>{
      this.Data = data;
    })
    
  }
 
 
// edit order event
  onEditClick(event,orderNumber){

    this.router.navigate(['/order', orderNumber]);
  }
  // new order event
  newOrder(){
    this.router.navigate(['/orderItem']);
  }

//delte the current order value selected
  onDeletClick(event,orderNumber){
   
    this.orderService.deleteOrder(orderNumber).subscribe(data=>{
      if(data.msg =='success'){
        this.router.navigate(['/orders']);
        location.reload();
      }
    })
      }
  }







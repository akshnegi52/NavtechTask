import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/service/orders.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  submitted = false;
  createOrderForm: FormGroup;
  formData;
  constructor(
    private orderService: OrdersService,
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,

  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.createOrderForm = this.fb.group({
      orderNumber: ['', [Validators.required]],
      orderDueDate: ['', [Validators.required]],
      orderBuyerName: ['', [Validators.required]],
      customerAdd: ['', [Validators.required]],
      customerPhone: ['', [Validators.required]],
      orderTotal: ['', [Validators.required]],
     
    })
  }

 
  updateProfile(e) {
    this.createOrderForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.createOrderForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.createOrderForm.valid) {
      console.log("iNvalid Form");
      return false;
    }
    this.formData = this.createOrderForm.value;
    console.log("Form data is:", this.formData);
    var orderObject = {
      OrderNumber: this.formData.orderNumber,
      OrderDueDate: this.formData.orderDueDate,
      CustomerBuyerName: this.formData.orderBuyerName,
      CustomerAddress: this.formData.customerAdd,
      CustomerPhone: this.formData.customerPhone,
      TotalOrder: this.formData.orderTotal
    }
    this.orderService.insertOrder(orderObject).subscribe(data => {

      if (data.msg == 'success') {
        this.router.navigate(['/orders']);
      }
      else {
        console.log("not inserting");
      }
    })
  }

}



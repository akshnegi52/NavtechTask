import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-eidt-item',
  templateUrl: './eidt-item.component.html',
  styleUrls: ['./eidt-item.component.css']
})
export class EidtItemComponent implements OnInit {

  submitted = false;
  editOrderForm: FormGroup;
formData;
orderNumber;
getDataIS;
  constructor(
    private orderService : OrdersService,
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private route:ActivatedRoute,

  ) {
       // get return url from route parameters or default to '/'
      

  }

  ngOnInit() { 
    this.editOrderForm = new FormGroup({
      orderNumber: new FormControl(),
      orderDueDate: new FormControl(),
      orderBuyerName: new FormControl(),
      customerAdd: new FormControl(),
      customerPhone: new FormControl(),
      orderTotal: new FormControl(),
   });
    this.orderNumber = this.route.snapshot.params['id'];
    this.orderService.getSingleOrder(this.orderNumber).subscribe(data=>{
      this.getDataIS = data;
      this.mainForm(data);
    });
    console.log("data is",this.getDataIS);
    
    
  }

  mainForm(data) {
    this.editOrderForm = this.fb.group({
      orderNumber: data.OrderNumber,
      orderDueDate:data.OrderDueDate,
      orderBuyerName: data.CustomerBuyerName,
      customerAdd: data.CustomerAddress,
      customerPhone: data.CustomerPhone,
      orderTotal: data.TotalOrder,
    })
  }

  
  updateProfile(e) {
    this.editOrderForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editOrderForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editOrderForm.valid) {
      console.log("iNvalid Form");
      return false;
    } 
this.formData = this.editOrderForm.value;
console.log("Form data is:",this.formData);
this.orderService.editOrder(this.formData).subscribe(data=>{
  if(data.msg == 'success'){
    this.router.navigate(['/orders']);
  }
})

  }
}

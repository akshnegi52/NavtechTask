import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;
  data;

  constructor(  private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router:Router,
  ) {
    
   
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(6)]]
  });
  }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this.data = this.loginForm.value;
            if (this.data.email=='user@gmail.com' && this.data.password == 'password') {
          
              this.toastr.success('Login Successfully', 'Success');
              localStorage.setItem('username',this.data.email );
              this.router.navigate(['/orders']);

            }
            else {
                this.toastr.error('Invalid Credentials', 'Error');
            }
      
    }

}

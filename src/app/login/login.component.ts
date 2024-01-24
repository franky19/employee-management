
// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  triggerValidation(controlName: string) {
    const control = this.myForm.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }
  

  onSubmit() {
    if (this.myForm.valid) {
      // Do something with the form data
      console.log(this.myForm.value);
      this.router.navigate(['/employee']);
      return
      // Navigate to the 'dashboard' route
      // this.router.navigate(['/dashboard']);
    } else {
      // Form is invalid, handle accordingly
    }
  }
  
}

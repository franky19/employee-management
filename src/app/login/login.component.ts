// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   // imports: [CommonModule,  ReactiveFormsModule],
// })

// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {
//     this.loginForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//     });
//   }

//   get loginControls() {
//     return this.loginForm.controls;
//   }

//   onSubmit() {
//     console.log("submit failed")
//     // if (!this.loginForm.valid) {
//     //   console.log("submit not failed")
//     //   return;
//     // }
//     // const user: User.IUserCredential = {
//     //   username: this.loginControls.username.value,
//     //   password: this.loginControls.password.value,
//     // };
//     // this.authService.login(user);
//   }

// }

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
      this.router.navigate(['/dashboard']);
      return
      // Navigate to the 'dashboard' route
      // this.router.navigate(['/dashboard']);
    } else {
      // Form is invalid, handle accordingly
    }
  }
  
}

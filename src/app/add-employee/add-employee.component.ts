// add-employee.component.ts
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})

export class AddEmployeeComponent {
  employeeForm: FormGroup;
  groups: string[] = ['Group1', 'Group2', 'Group3', 'Group4', 'Group5', 'Group6', 'Group7', 'Group8', 'Group9', 'Group10'];


  constructor(private fb: FormBuilder, private router: Router) {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      basicSalary: ['', [Validators.required]],
      birthDate: ['', [Validators.required,this.validateBirthdate.bind(this)]],
      group: ['', Validators.required],
    });
  }

  triggerValidation(controlName: string) {
    const control = this.employeeForm.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }

  validateBirthdate(control: AbstractControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
  
    if (selectedDate > today) {
      return { 'invalidBirthdate': true };
    }
  
    return null;
  }
  

  onSubmit() {
    if (this.employeeForm.valid) {
      // Do something with the form data
      console.log(this.employeeForm.value);
      this.router.navigate(['/employee']);
      return
      // Navigate to the 'dashboard' route
      // this.router.navigate(['/dashboard']);
    } else {
      // Form is invalid, handle accordingly
    }
  }
}

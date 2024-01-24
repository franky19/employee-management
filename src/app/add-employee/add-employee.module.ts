import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee.component';

@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [CommonModule, ReactiveFormsModule,FormsModule]
})
export class LoginModule {}

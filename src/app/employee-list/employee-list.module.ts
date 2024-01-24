import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { EmployeeService } from '../services/employee.service';
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [CommonModule, ReactiveFormsModule],
//   providers:[EmployeeService]
})
export class EmployeeListModule {}

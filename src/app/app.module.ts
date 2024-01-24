import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NumericInputDirective } from './component/numeric.component';

@NgModule({
  declarations: [LoginComponent,EmployeeListComponent,EmployeeDetailComponent,AddEmployeeComponent,NumericInputDirective],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
//   bootstrap: [LoginComponent],
  bootstrap:[LoginComponent],
  exports: [RouterModule],
})
export class AppModule {}


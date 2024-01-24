import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'employee', component: EmployeeListComponent },
    { path: 'employee/:id', component: EmployeeDetailComponent },
    {path:'add-employee',component:AddEmployeeComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    
];

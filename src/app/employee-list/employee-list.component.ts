// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Employee } from '../model/employee.model';
// import { EmployeeService } from '../services/employee.service';

// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.css'],
// })
// export class EmployeeListComponent implements OnInit {
//   employees: Employee[] = [];
//   currentPage = 1;
//   pageSize = 10;

//   constructor(private employeeService: EmployeeService,private router: Router) {}

//   ngOnInit(): void {
//     this.loadEmployees();
//   }

//   loadEmployees() {
//     this.employees = this.employeeService.getEmployeesPage(
//       this.currentPage,
//       this.pageSize
//     );
//   }

//   onPageChange(page: number) {
//     console.log(`Clicked on page ${page}`);
//     // this.currentPage = page;
//     // this.loadEmployees();
//   }
  
//   editEmployee(employeeId: number): void {

//     console.log(employeeId)
//     // employee/:id
//     // Assuming you have a route named '/edit' for editing employees
//     // this.router.navigate(['/employee/', employeeId]);
//   }
  

//   goToNextPage(): void {
//     // Assuming you have a route named '/page/2'
//     this.router.navigate(['/page/2']);
//   }

//   getPages(): number[] {
//     const totalPages = Math.ceil(
//       this.employeeService.getEmployees().length / this.pageSize
//     );
//     return Array.from({ length: totalPages }, (_, index) => index + 1);
//   }
// }


// employee-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  currentPage = 1;
  pageSize = 10;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employees = this.employeeService.getEmployeesPage(
      this.currentPage,
      this.pageSize
    );
  }

  onPageChange(page: number) {
    console.log(`Clicked on page ${page}`);
    // Handle page change logic here if needed
  }

  editEmployee(employeeId: number): void {
    console.log(`Edit employee with ID ${employeeId}`);
    // Assuming you have a route named '/employee/:id' for editing employees
    this.router.navigate(['/employee', employeeId]);
  }

  goToNextPage(): void {
    // Assuming you have a route named '/page/2'
    this.router.navigate(['/page/2']);
  }

  myFunction() {
    this.router.navigate(['login']);
    // console.log('Button clicked!');
  }

  getPages(): number[] {
    const totalPages = Math.ceil(
      this.employeeService.getEmployees().length / this.pageSize
    );
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
}

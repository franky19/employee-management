import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [];
  currentDateAndTime: Date = new Date();
  myBasicSalary :number = 1000000;


  constructor() {
    // Generate dummy data
    for (let i = 1; i <= 100; i++) {
      this.employees.push({
        id: i,
        username: `Employee ${i}`,
        firstName: `Employee ${i}`,
        lastName:`testing ${i}`,
        email:`testing${i}@gmail.com `,
        birthDate:this.currentDateAndTime.toLocaleString(),
        basicSalary:this.myBasicSalary.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        status:'single',
        group:"none",
        description:"none"
        // lastName: `testing ${i % 5}`,
      });
    }
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeesPage(pageNumber: number, pageSize: number): Employee[] {
    const startIndex = (pageNumber - 1) * pageSize;
    return this.employees.slice(startIndex, startIndex + pageSize);
  }

  private dummyGroups: string[] = [
    'Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5',
    'Group 6', 'Group 7', 'Group 8', 'Group 9', 'Group 10'
  ];

  getDummyGroups(): string[] {
    return this.dummyGroups;
  }
}

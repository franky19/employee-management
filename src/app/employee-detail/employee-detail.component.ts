// employee-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  template: '<h2>Edit Employee {{ employeeId }}</h2>',
})
export class EmployeeDetailComponent implements OnInit {
  employeeId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.employeeId = idParam ? +idParam : null;
  }
}

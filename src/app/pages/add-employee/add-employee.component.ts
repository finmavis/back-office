import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import * as faker from 'faker';

import { GROUPS } from 'src/app/shared/constants/groups';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  public addEmployeeForm = this.formBuilder.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    birthDate: ['', Validators.required],
    basicSalary: ['', [Validators.required, Validators.min(0)]],
    status: ['', Validators.required],
    group: ['', Validators.required],
    description: ['', Validators.required],
  });
  public addEmployeeFormError = false;
  public groups = GROUPS;
  public filteredGroups = this.groups;
  public maxDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeesService: EmployeesService
  ) {
    this.maxDate = new Date();
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.addEmployeeForm.controls[controlName].hasError(errorName);
  }

  public onSearchGroup(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.filteredGroups = this.groups.filter((option) =>
      option.toLowerCase().startsWith(value)
    );
  }

  public onSubmit(): void {
    const employeeData = this.addEmployeeForm.value;
    employeeData.id = faker.random.uuid();
    this.employeesService.addEmployee(employeeData);
    this.router.navigate(['employees']);
  }

  public onCancel(): void {
    this.router.navigate(['employees']);
  }
}

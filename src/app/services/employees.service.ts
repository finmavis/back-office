import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Employee } from 'src/app/models/employee';

import { EMPLOYEES } from 'src/app/shared/constants/employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private readonly employeesSource = new BehaviorSubject<Employee[]>(EMPLOYEES);
  public employees$ = this.employeesSource.asObservable();

  constructor() {}

  private get employees(): Employee[] {
    return this.employeesSource.getValue();
  }

  private setEmployees(value: Employee[]) {
    this.employeesSource.next(value);
  }

  public getEmployee(id: string): Employee | undefined {
    return this.employees.find((employee) => employee.id === id);
  }

  public addEmployee(value: Employee) {
    this.setEmployees([...this.employees, value]);
  }

  public updateEmployee(value: Employee) {
    const employees = this.employees.map((employee) => {
      if (employee.id === value.id) {
        return value;
      }
      return employee;
    });
    this.setEmployees(employees);
  }

  public deleteEmployee(id: string) {
    const employees = this.employees.filter((employee) => employee.id !== id);
    this.setEmployees(employees);
  }
}

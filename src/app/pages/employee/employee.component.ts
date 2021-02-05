import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { SESSION_STORAGE_KEY } from 'src/app/shared/constants/session-storage';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit, OnDestroy {
  private querySubscription!: Subscription;
  public employee!: Employee | undefined;
  public employeeQueryId!: string | null;
  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.querySubscription = this.route.params.subscribe((params) => {
      this.employeeQueryId = params.id;
      this.employee = this.employeesService.getEmployee(params.id);
    });
    window.sessionStorage.setItem(
      SESSION_STORAGE_KEY.fromDetailPage,
      JSON.stringify(true)
    );
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}

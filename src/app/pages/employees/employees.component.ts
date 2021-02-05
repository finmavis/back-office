import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { Employee } from 'src/app/models/employee';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { SESSION_STORAGE_KEY } from 'src/app/shared/constants/session-storage';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscription!: Subscription;
  public employees = new MatTableDataSource<Employee>([]);
  public displayedColumns: string[] = [
    'firstName',
    'lastName',
    'username',
    'email',
    'actions',
  ];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private authService: AuthService,
    private employeesService: EmployeesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.handleEmployeesSubscription();
    this.handlePersistSearchFromDetailPage();
  }

  ngAfterViewInit(): void {
    this.setupSortAndPaginationTable();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private handleEmployeesSubscription(): void {
    this.subscription = this.employeesService.employees$.subscribe(
      (employees) => (this.employees.data = employees)
    );
  }

  private handlePersistSearchFromDetailPage(): void {
    const filter = window.sessionStorage.getItem(SESSION_STORAGE_KEY.filter);
    const isFromDetailPage = window.sessionStorage.getItem(
      SESSION_STORAGE_KEY.fromDetailPage
    );
    if (filter && isFromDetailPage) {
      this.employees.filter = filter.trim().toLocaleLowerCase();
    }
    window.sessionStorage.removeItem(SESSION_STORAGE_KEY.filter);
    window.sessionStorage.removeItem(SESSION_STORAGE_KEY.fromDetailPage);
  }

  private setupSortAndPaginationTable(): void {
    this.employees.sort = this.sort;
    this.employees.paginator = this.paginator;
  }

  public onClickLogout(): void {
    this.authService.logout();
  }

  public onFilter(event: KeyboardEvent): void {
    const { value } = event.target as HTMLInputElement;
    this.employees.filter = value.trim().toLocaleLowerCase();
    window.sessionStorage.setItem(SESSION_STORAGE_KEY.filter, value);
  }

  public openSnackBar(
    message: string,
    action: string,
    firstname: string
  ): void {
    this.snackBar.open(`${message} ${firstname}`, action, {
      duration: 10000,
      horizontalPosition: 'start',
      panelClass: [message === 'Deleting' ? 'red-snackbar' : 'yellow-snackbar'],
    });
  }
}

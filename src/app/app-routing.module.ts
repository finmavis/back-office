import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';

import { AuthGuardService } from './services/auth-guard.service';
import { DashboardGuardService } from './services/dashboard-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [DashboardGuardService],
  },
  {
    path: 'employee/add',
    component: AddEmployeeComponent,
    canActivate: [DashboardGuardService],
  },
  {
    path: 'employee/:id',
    component: EmployeeComponent,
    canActivate: [DashboardGuardService],
  },
  { path: '**', redirectTo: '/employees' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

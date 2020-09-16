import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { ProjectComponent } from '../project/project.component';
import {EmployeesComponent} from '../employees/employees.component';
import {DepartmentComponent} from '../department/department.component';





const routes: Routes = [ 
   
  { path: 'employee', component: EmployeesComponent },
  { path: 'Department', component: DepartmentComponent },
  { path: 'Projects', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
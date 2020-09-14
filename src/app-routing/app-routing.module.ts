import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { ProjectComponent } from '../project/project.component';
import {EmployeesComponent} from '../employees/employees.component';





const routes: Routes = [ 
   
  { path: 'employee', component: EmployeesComponent },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'Projects', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
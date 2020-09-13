import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { ProjectComponent } from '../project/project.component';
import { NewemployeeComponent } from '../newemployee/newemployee.component';




const routes: Routes = [ 
   
  { path: 'employee', component: EmployeeComponent },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'Projects', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
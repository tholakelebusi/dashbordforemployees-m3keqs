import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  employeelist=[];
  constructor(private myfirst:DepartmentService) { }

 
  ngOnInit(): void {
    this.employeelist = this.myfirst.getDataDept();
  }

}
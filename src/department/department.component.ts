import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments=[];
  constructor(private mydept:DepartmentService) { }

 
  ngOnInit(): void {
    this.departments= this.mydept.getDataDept();
  }

}
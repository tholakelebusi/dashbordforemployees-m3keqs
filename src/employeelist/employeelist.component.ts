import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  employeelist=[];
  constructor(private myfirst:RecordService) { }

 
  ngOnInit(): void {
    this.employeelist = this.myfirst.getData();
  }

 /*
  hello()
  {
    var retval = confirm("Do you want to Delete");
    if (retval == true)
    {
    const index=this.employees.indexOf(name);
    if(index>-1)
    {
      this.employees.splice(index,1);
    }

    return true;
  }
    else
  {
    
    return false;
  }
  
    }
    */

}
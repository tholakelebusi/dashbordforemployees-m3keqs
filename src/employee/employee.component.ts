import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


employeelist=[];
  constructor(private myfirst:RecordService,public dialog: MatDialog){}

 
  ngOnInit(): void {
    this.employeelist = this.myfirst.getData();
  }
  

  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: "Do you want to delet?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
       {
        console.log('Yes clicked');

         const index=this.employeelist.indexOf(name);
    if(index>-1)
    {
      this.employees.splice(index,1);
    }
        // DO SOMETHING
      }
    });

}
 /* delete(name)
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
       
    


 //udating button
update()
{
  var retval = confirm("Do you want to Update?");
if (retval == true)
{
 
  return true;
}
  else
{
  
  return false;
}

  }


}
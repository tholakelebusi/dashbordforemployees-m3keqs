import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

employees=[];
 
 
  constructor(public dialog: MatDialog,private employ:RecordService) { }

   ngOnInit(): void {
    this.employees= this.employ.getData();
  }

  openDialog(name){
    const dialogRef = this.dialog.open(DialogComponent, {
     
 data: "Do you want to delete?"
    });
 const index=this.employees.indexOf(name);
 dialogRef.afterClosed().subscribe(result => {
      if(result)
       {
       if(index>-1)
    {
      this.employees.splice(index,1);
      return true;

    }
      }
    });

}

update()
{
  
  
}

add()





}
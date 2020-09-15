import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

 constructor(
    public dialogRef: MatDialogRef<UpdateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
    ngOnInit(): void {
  }

}
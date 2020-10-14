import { Component, OnInit } from "@angular/core";
import { DialogComponent } from "../dialog/dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { RecordService } from "../record.service";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit {
  n1: boolean = false;
  employees = [];
  names = "";
  surnames = "";
  positions = "";
  ages = "";
  url = "";

  constructor(public dialog: MatDialog, private employ: RecordService) {}

  ngOnInit(): void {
    this.employees = this.employ.getData();
  }

  openDialog(name) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: "Do you want to delete?"
    });
    const index = this.employees.indexOf(name);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (index > -1) {
          this.employees.splice(index, 1);
          return true;
        }
      }
    });
  }

  update() {}

  open() {
    this.n1 = true;
  }

  addToLists() {
    this.n1 = true;
    const newEmpl = {
      image: this.url,
      name: this.names,
      surname: this.surnames,
      age: this.ages,
      position: this.positions
    };
    this.employees.push(newEmpl);
    this.n1 = false;
  }
}

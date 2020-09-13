import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from '../app-routing/app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {EmployeelistComponent} from '../employeelist/employeelist.component';
import {ProjectComponent} from '../project/project.component';
import {NewemployeeComponent} from '../newemployee/newemployee.component';



@NgModule({
  imports:[BrowserModule,MatDialogModule,AppRoutingModule,FormsModule,RouterModule,MatCardModule,MatButtonModule,BrowserAnimationsModule],

  declarations:[ AppComponent,HelloComponent,EmployeelistComponent,ProjectComponent,NewemployeeComponent
    ],
     entryComponents:[DialogComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

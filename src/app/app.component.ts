import { Component, VERSION } from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component'

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;



  
}

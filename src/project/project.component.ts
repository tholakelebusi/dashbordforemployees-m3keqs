import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project = [
    { projectName: 'Fixing Hardware', 
    projectDetails: 'Fixing broken hardwares',
     projectDate: '12/09/2020',
      implementDept: 'IT Dept' },
    { projectName:'Installing Software',
     projectDetails: 'Installation of new softwares',
      projectDate: '16/09/2020', 
      implementDept: 'IT Dept' },
    { projectName: 'Changing Keybords', 
    projectDetails: 'Installing wireless keybords',
     projectDate: '14/09/2020',
      implementDept: 'IT Dept' },
      { projectName: 'Fixing Hardware', 
    projectDetails: 'Fixing broken hardwares',
     projectDate: '12/09/2020',
      implementDept: 'IT Dept' },
    { projectName:'Installing Software',
     projectDetails: 'Installation of new softwares',
      projectDate: '16/09/2020', 
      implementDept: 'IT Dept' },
    { projectName: 'Changing Keybords', 
    projectDetails: 'Installing wireless keybords',
     projectDate: '14/09/2020',
      implementDept: 'IT Dept' },
      { projectName: 'Fixing Hardware', 
    projectDetails: 'Fixing broken hardwares',
     projectDate: '12/09/2020',
      implementDept: 'IT Dept' },
    { projectName:'Installing Software',
     projectDetails: 'Installation of new softwares',
      projectDate: '16/09/2020', 
      implementDept: 'IT Dept' },
    { projectName: 'Changing Keybords', 
    projectDetails: 'Installing wireless keybords',
     projectDate: '14/09/2020',
      implementDept: 'IT Dept' }];
  constructor() { }

  ngOnInit(): void {
  }

}
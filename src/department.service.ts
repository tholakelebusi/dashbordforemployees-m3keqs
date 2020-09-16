import { Injectable } from '@angular/core';


@Injectable()
export class DepartmentService {

  constructor() { }

getDataDept()
  {
    return [
      {
    dept1:'IT',dept2:'Human Resource Management',dept3:'Human Resource Management',dept4:'Marketing',dept5:'Research and Development (R&D)',dept6:'Legal'
      }];
  }
}
       
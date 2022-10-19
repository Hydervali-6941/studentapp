import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-import',
  templateUrl: './employee-import.component.html',
  styleUrls: ['./employee-import.component.css']
})
export class EmployeeImportComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

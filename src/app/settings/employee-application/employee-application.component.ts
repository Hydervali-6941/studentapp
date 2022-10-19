import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-application',
  templateUrl: './employee-application.component.html',
  styleUrls: ['./employee-application.component.css']
})
export class EmployeeApplicationComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

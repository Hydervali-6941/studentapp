import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-attendance',
  templateUrl: './emp-attendance.component.html',
  styleUrls: ['./emp-attendance.component.css']
})
export class EmpAttendanceComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}

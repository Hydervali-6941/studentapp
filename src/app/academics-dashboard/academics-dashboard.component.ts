import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academics-dashboard',
  templateUrl: './academics-dashboard.component.html',
  styleUrls: ['./academics-dashboard.component.css'],
})
export class AcademicsDashboardComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() {}

  ngOnInit(): void {}
}

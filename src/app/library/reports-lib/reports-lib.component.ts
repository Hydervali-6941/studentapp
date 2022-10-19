import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-lib',
  templateUrl: './reports-lib.component.html',
  styleUrls: ['./reports-lib.component.css']
})
export class ReportsLibComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

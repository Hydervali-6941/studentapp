import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-statements',
  templateUrl: './salary-statements.component.html',
  styleUrls: ['./salary-statements.component.css'],
})
export class SalaryStatementsComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

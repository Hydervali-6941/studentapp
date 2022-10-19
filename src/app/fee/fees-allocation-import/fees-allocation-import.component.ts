import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees-allocation-import',
  templateUrl: './fees-allocation-import.component.html',
  styleUrls: ['./fees-allocation-import.component.css'],
})
export class FeesAllocationImportComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

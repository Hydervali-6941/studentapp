import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-waiver-category',
  templateUrl: './fee-waiver-category.component.html',
  styleUrls: ['./fee-waiver-category.component.css'],
})
export class FeeWaiverCategoryComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

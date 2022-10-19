import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-sub-category-fine',
  templateUrl: './fee-sub-category-fine.component.html',
  styleUrls: ['./fee-sub-category-fine.component.css'],
})
export class FeeSubCategoryFineComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

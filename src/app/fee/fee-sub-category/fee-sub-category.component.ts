import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-sub-category',
  templateUrl: './fee-sub-category.component.html',
  styleUrls: ['./fee-sub-category.component.css'],
})
export class FeeSubCategoryComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

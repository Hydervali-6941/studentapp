import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-allocation',
  templateUrl: './fee-allocation.component.html',
  styleUrls: ['./fee-allocation.component.css'],
})
export class FeeAllocationComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

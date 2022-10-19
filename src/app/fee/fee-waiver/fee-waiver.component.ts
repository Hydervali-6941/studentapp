import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-waiver',
  templateUrl: './fee-waiver.component.html',
  styleUrls: ['./fee-waiver.component.css'],
})
export class FeeWaiverComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

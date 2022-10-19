import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-head',
  templateUrl: './pay-head.component.html',
  styleUrls: ['./pay-head.component.css'],
})
export class PayHeadComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

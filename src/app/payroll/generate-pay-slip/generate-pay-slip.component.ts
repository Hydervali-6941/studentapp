import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-pay-slip',
  templateUrl: './generate-pay-slip.component.html',
  styleUrls: ['./generate-pay-slip.component.css'],
})
export class GeneratePaySlipComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

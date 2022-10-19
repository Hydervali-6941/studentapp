import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-payment',
  templateUrl: './quick-payment.component.html',
  styleUrls: ['./quick-payment.component.css'],
})
export class QuickPaymentComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

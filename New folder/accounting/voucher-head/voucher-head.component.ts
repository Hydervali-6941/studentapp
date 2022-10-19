import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher-head',
  templateUrl: './voucher-head.component.html',
  styleUrls: ['./voucher-head.component.css'],
})
export class VoucherHeadComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher-master',
  templateUrl: './voucher-master.component.html',
  styleUrls: ['./voucher-master.component.css'],
})
export class VoucherMasterComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

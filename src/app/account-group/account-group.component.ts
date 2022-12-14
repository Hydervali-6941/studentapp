import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-group',
  templateUrl: './account-group.component.html',
  styleUrls: ['./account-group.component.css'],
})
export class AccountGroupComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

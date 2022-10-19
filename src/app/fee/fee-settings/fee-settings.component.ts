import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-settings',
  templateUrl: './fee-settings.component.html',
  styleUrls: ['./fee-settings.component.css'],
})
export class FeeSettingsComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

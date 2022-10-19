import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-template',
  templateUrl: './fee-template.component.html',
  styleUrls: ['./fee-template.component.css'],
})
export class FeeTemplateComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

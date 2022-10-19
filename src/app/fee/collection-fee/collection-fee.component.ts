import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-fee',
  templateUrl: './collection-fee.component.html',
  styleUrls: ['./collection-fee.component.css'],
})
export class CollectionFeeComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees-collection-import',
  templateUrl: './fees-collection-import.component.html',
  styleUrls: ['./fees-collection-import.component.css'],
})
export class FeesCollectionImportComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

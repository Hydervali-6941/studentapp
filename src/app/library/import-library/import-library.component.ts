import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-library',
  templateUrl: './import-library.component.html',
  styleUrls: ['./import-library.component.css'],
})
export class ImportLibraryComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() {}

  ngOnInit(): void {}
}

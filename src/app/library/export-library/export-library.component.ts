import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-library',
  templateUrl: './export-library.component.html',
  styleUrls: ['./export-library.component.css'],
})
export class ExportLibraryComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() {}

  ngOnInit(): void {}
}

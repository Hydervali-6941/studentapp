import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concession-entry',
  templateUrl: './concession-entry.component.html',
  styleUrls: ['./concession-entry.component.css'],
})
export class ConcessionEntryComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

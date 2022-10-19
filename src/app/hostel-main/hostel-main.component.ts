import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostel-main',
  templateUrl: './hostel-main.component.html',
  styleUrls: ['./hostel-main.component.css']
})
export class HostelMainComponent implements OnInit {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

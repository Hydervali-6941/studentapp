import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostel-allocation',
  templateUrl: './hostel-allocation.component.html',
  styleUrls: ['./hostel-allocation.component.css']
})
export class HostelAllocationComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

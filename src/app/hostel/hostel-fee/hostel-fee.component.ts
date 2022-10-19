import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostel-fee',
  templateUrl: './hostel-fee.component.html',
  styleUrls: ['./hostel-fee.component.css']
})
export class HostelFeeComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

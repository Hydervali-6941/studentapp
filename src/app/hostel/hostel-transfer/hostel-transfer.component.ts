import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostel-transfer',
  templateUrl: './hostel-transfer.component.html',
  styleUrls: ['./hostel-transfer.component.css']
})
export class HostelTransferComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

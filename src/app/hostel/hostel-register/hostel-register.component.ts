import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostel-register',
  templateUrl: './hostel-register.component.html',
  styleUrls: ['./hostel-register.component.css']
})
export class HostelRegisterComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

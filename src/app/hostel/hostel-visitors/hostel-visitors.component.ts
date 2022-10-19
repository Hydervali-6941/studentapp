import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostel-visitors',
  templateUrl: './hostel-visitors.component.html',
  styleUrls: ['./hostel-visitors.component.css']
})
export class HostelVisitorsComponent implements OnInit {
  
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

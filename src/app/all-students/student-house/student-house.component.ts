import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-house',
  templateUrl: './student-house.component.html',
  styleUrls: ['./student-house.component.css']
})
export class StudentHouseComponent implements OnInit {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}


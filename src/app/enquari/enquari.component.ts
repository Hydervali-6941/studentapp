import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquari',
  templateUrl: './enquari.component.html',
  styleUrls: ['./enquari.component.css']
})
export class EnquariComponent implements OnInit {


  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

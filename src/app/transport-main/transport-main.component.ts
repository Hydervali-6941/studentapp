import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-main',
  templateUrl: './transport-main.component.html',
  styleUrls: ['./transport-main.component.css']
})
export class TransportMainComponent implements OnInit {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

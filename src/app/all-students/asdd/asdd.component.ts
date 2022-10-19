import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asdd',
  templateUrl: './asdd.component.html',
  styleUrls: ['./asdd.component.css']
})
export class AsddComponent implements OnInit {

  
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

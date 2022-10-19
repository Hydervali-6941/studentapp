import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup2',
  templateUrl: './setup2.component.html',
  styleUrls: ['./setup2.component.css']
})
export class Setup2Component implements OnInit {

  
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

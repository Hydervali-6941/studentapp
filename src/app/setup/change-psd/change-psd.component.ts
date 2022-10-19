import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-psd',
  templateUrl: './change-psd.component.html',
  styleUrls: ['./change-psd.component.css']
})
export class ChangePsdComponent implements OnInit {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

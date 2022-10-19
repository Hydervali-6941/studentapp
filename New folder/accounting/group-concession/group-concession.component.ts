import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-concession',
  templateUrl: './group-concession.component.html',
  styleUrls: ['./group-concession.component.css'],
})
export class GroupConcessionComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

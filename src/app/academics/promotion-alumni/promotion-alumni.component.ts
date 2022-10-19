import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-alumni',
  templateUrl: './promotion-alumni.component.html',
  styleUrls: ['./promotion-alumni.component.css'],
})
export class PromotionAlumniComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() {}

  ngOnInit(): void {}
}

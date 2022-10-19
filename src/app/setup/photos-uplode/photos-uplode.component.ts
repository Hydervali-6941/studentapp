import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-photos-uplode',
  templateUrl: './photos-uplode.component.html',
  styleUrls: ['./photos-uplode.component.css']
})
export class PhotosUplodeComponent implements OnInit {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  selectFormControl = new FormControl('', Validators.required);
  value = 'Clear me';

  constructor() { }

  ngOnInit(): void {
  }

}

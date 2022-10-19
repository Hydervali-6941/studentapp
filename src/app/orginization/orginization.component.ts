import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-orginization',
  templateUrl: './orginization.component.html',
  styleUrls: ['./orginization.component.css']
})
export class OrginizationComponent implements OnInit {

  
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  
  constructor(private dialog: MatDialog) { }
  

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }



  ngOnInit(): void {
  }

}

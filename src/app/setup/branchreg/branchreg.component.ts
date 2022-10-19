import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-branchreg',
  templateUrl: './branchreg.component.html',
  styleUrls: ['./branchreg.component.css']
})
export class BranchregComponent implements OnInit {
  
    
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

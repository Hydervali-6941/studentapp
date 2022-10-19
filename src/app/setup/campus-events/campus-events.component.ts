import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-campus-events',
  templateUrl: './campus-events.component.html',
  styleUrls: ['./campus-events.component.css']
})
export class CampusEventsComponent implements OnInit {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}

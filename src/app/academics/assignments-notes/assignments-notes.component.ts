import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-assignments-notes',
  templateUrl: './assignments-notes.component.html',
  styleUrls: ['./assignments-notes.component.css'],
})
export class AssignmentsNotesComponent implements OnInit {
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  disabled = new FormControl(false);
  /**************/
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}
}

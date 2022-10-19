import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-roles-creation',
  templateUrl: './roles-creation.component.html',
  styleUrls: ['./roles-creation.component.css']
})
export class RolesCreationComponent implements OnInit {

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

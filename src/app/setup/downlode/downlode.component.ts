import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-downlode',
  templateUrl: './downlode.component.html',
  styleUrls: ['./downlode.component.css']
})
export class DownlodeComponent implements OnInit {

  
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  selectedFiles: any;

  selectFile(event : any) {
    this.selectedFiles = event.target.files;
}

openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
  this.dialog.open(templateRef);
}

constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}

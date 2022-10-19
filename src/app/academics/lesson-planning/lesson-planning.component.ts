import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lesson-planning',
  templateUrl: './lesson-planning.component.html',
  styleUrls: ['./lesson-planning.component.css'],
})
export class LessonPlanningComponent implements OnInit {
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  disabled = new FormControl(false);
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
}

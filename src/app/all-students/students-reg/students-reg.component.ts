import { Component, OnInit, TemplateRef } from '@angular/core';


import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-students-reg',
  templateUrl: './students-reg.component.html',
  styleUrls: ['./students-reg.component.css']
})
export class StudentsRegComponent implements OnInit {

  openDialogWithTemplateRef(templateRef: TemplateRef<any> ) {
    this.dialog.open(templateRef ,{width:'100%'});
    
   
  
  }
  disabled = new FormControl(false);

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private dialog: MatDialog) {}
  // tableData = [
  //   {
  //     class: '10th',
  //     RegdNo: 123,
  //     Marks: '80%',
  //     yearofpassing: 2017,
  //     status: 'active',
  //   },
  //   {
  //     class: '12th',
  //     RegdNo: 124,
  //     Marks: '80%',
  //     yearofpassing: 2015,
  //     status: 'active',
  //   },
  //   {
  //     class: '4th',
  //     RegdNo: 125,
  //     Marks: '80%',
  //     yearofpassing: 2021,
  //     status: 'Inactive',
  //   },
  //   {
  //     class: '6th',
  //     RegdNo: 126,
  //     Marks: '80%',
  //     yearofpassing: 2022,
  //     status: 'active',
  //   },
  //   {
  //     class: '8th',
  //     RegdNo: 127,
  //     Marks: '56%',
  //     yearofpassing: 2020,
  //     status: 'active',
  //   },
  //   {
  //     class: '10th',
  //     RegdNo: 128,
  //     Marks: '93%',
  //     yearofpassing: 2012,
  //     status: 'Inactive',
  //   },
  // ];

  ngOnInit(): void {}
}
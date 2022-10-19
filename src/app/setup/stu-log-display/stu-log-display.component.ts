import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  phone: string;
  designation: number;
  logname: string;
  logpass: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', phone: '', designation: 1.0079, logname: 'H',logpass:'*****' },
  {name: 'Helium', phone: '', designation: 4.0026, logname: 'He',logpass:'*****'},
  {name: 'Lithium', phone: '', designation: 6.941, logname: 'Li',logpass:'*****'},
  {name: 'Lithium', phone: '', designation: 9.0122, logname: 'Be',logpass:'*****'},
  {name: 'Boron', phone: '', designation: 10.811, logname: 'B',logpass:'*****'},
  {name: 'Carbon', phone: '', designation: 12.0107, logname: 'C',logpass:'*****'},
  {name: 'Nitrogen', phone: '', designation: 14.0067, logname: 'N',logpass:'*****'},
  {name: 'Oxygen', phone: '', designation: 15.9994, logname: 'O',logpass:'*****'},
  {name: 'Fluorine', phone: '', designation: 18.9984, logname: 'F',logpass:'*****'},
  {name: 'Neon', phone: '', designation: 20.1797, logname: 'Ne',logpass:'*****'},
];



@Component({
  selector: 'app-stu-log-display',
  templateUrl: './stu-log-display.component.html',
  styleUrls: ['./stu-log-display.component.css']
})
export class StuLogDisplayComponent implements OnInit {

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


/**
 * @title Table with selection
 */

  displayedColumns: string[] = ['name', 'phone', 'designation', 'logname'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}




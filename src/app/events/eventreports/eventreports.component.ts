import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eventreports',
  templateUrl: './eventreports.component.html',
  styleUrls: ['./eventreports.component.css'],
})
export class EventreportsComponent implements OnInit {
  sideBarOpen = true;
  opened = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  title = 'Education Software';

  organizationname = 'AKTECHS';

  constructor(private router: Router) {}

  ngOnInit(): void {}
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css'],
})
export class RouteComponent implements OnInit {
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from '../sidenav/sidenav.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialComponent = [
  CommonModule,
  SidenavComponent,
  HomeComponent,
  DashboardComponent,
  HeaderComponent,
  BrowserAnimationsModule,
];

@NgModule({
  exports: [materialComponent],
  imports: [materialComponent],
})
export class MaterialModule {}

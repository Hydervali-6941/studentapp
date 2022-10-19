import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { RouteComponent } from './route/route.component';
import { DestinationComponent } from './destination/destination.component';
import { FeecollectionComponent } from './feecollection/feecollection.component';
import { SmsalertComponent } from './smsalert/smsalert.component';
import { ReportsComponent } from './reports/reports.component';



@NgModule({
  declarations: [
    AddvehicleComponent,
    AdddriverComponent,
    RouteComponent,
    DestinationComponent,
    FeecollectionComponent,
    SmsalertComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransportModule { }

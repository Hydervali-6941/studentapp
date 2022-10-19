import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventtypeComponent } from './eventtype/eventtype.component';
import { AddeventsComponent } from './addevents/addevents.component';
import { EventreportsComponent } from './eventreports/eventreports.component';



@NgModule({
  declarations: [
    EventtypeComponent,
    AddeventsComponent,
    EventreportsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }

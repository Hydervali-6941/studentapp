import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { HostelRoomComponent } from './hostel-room/hostel-room.component';
import { HostelAllocationComponent } from './hostel-allocation/hostel-allocation.component';
import { HostelTransferComponent } from './hostel-transfer/hostel-transfer.component';
import { HostelRegisterComponent } from './hostel-register/hostel-register.component';
import { HostelVisitorsComponent } from './hostel-visitors/hostel-visitors.component';
import { HostelFeeComponent } from './hostel-fee/hostel-fee.component';



@NgModule({
  declarations: [
    HostelDetailsComponent,
    HostelRoomComponent,
    HostelAllocationComponent,
    HostelTransferComponent,
    HostelRegisterComponent,
    HostelVisitorsComponent,
    HostelFeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HostelModule { }

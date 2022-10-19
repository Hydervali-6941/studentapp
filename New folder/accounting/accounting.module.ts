import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountGroupComponent } from './account-group/account-group.component';
import { VoucherMasterComponent } from './voucher-master/voucher-master.component';
import { VoucherHeadComponent } from './voucher-head/voucher-head.component';
import { CreateVoucherComponent } from './create-voucher/create-voucher.component';
import { DayBookComponent } from './day-book/day-book.component';
import { CashBookComponent } from './cash-book/cash-book.component';
import { BankBookComponent } from './bank-book/bank-book.component';
import { AccountReportComponent } from './account-report/account-report.component';
import { ConcessionEntryComponent } from './concession-entry/concession-entry.component';
import { GroupConcessionComponent } from './group-concession/group-concession.component';



@NgModule({
  declarations: [
    AccountGroupComponent,
    VoucherMasterComponent,
    VoucherHeadComponent,
    CreateVoucherComponent,
    DayBookComponent,
    CashBookComponent,
    BankBookComponent,
    AccountReportComponent,
    ConcessionEntryComponent,
    GroupConcessionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayHeadComponent } from './pay-head/pay-head.component';
import { PaymentTypesComponent } from './payment-types/payment-types.component';
import { SalarySettingsComponent } from './salary-settings/salary-settings.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { GeneratePaySlipComponent } from './generate-pay-slip/generate-pay-slip.component';
import { SalaryStatementsComponent } from './salary-statements/salary-statements.component';



@NgModule({
  declarations: [
    PayHeadComponent,
    PaymentTypesComponent,
    SalarySettingsComponent,
    EmployeeSalaryComponent,
    GeneratePaySlipComponent,
    SalaryStatementsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PayrollModule { }

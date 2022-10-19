import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeCategoryComponent } from './fee-category/fee-category.component';
import { FeeSubCategoryComponent } from './fee-sub-category/fee-sub-category.component';
import { FeeSubCategoryFineComponent } from './fee-sub-category-fine/fee-sub-category-fine.component';
import { FeeWaiverCategoryComponent } from './fee-waiver-category/fee-waiver-category.component';
import { FeeWaiverComponent } from './fee-waiver/fee-waiver.component';
import { FeeTemplateComponent } from './fee-template/fee-template.component';
import { FeeAllocationComponent } from './fee-allocation/fee-allocation.component';
import { FeeCollectionComponent, CollectionFeeComponent } from './collection-fee/collection-fee.component';
import { QuickPaymentComponent } from './quick-payment/quick-payment.component';
import { ReportsCollectionComponent } from './reports-collection/reports-collection.component';
import { FeesAllocationImportComponent } from './fees-allocation-import/fees-allocation-import.component';
import { FeesCollectionImportComponent } from './fees-collection-import/fees-collection-import.component';
import { FeeSettingsComponent } from './fee-settings/fee-settings.component';

@NgModule({
  declarations: [
    FeeCategoryComponent,
    FeeSubCategoryComponent,
    FeeSubCategoryFineComponent,
    FeeWaiverCategoryComponent,
    FeeWaiverComponent,
    FeeTemplateComponent,
    FeeAllocationComponent,
    FeeCollectionComponent,
    QuickPaymentComponent,
    ReportsCollectionComponent,
    FeesAllocationImportComponent,
    FeesCollectionImportComponent,
    FeeSettingsComponent,
    CollectionFeeComponent,
  ],
  imports: [CommonModule],
})
export class FeeModule {}

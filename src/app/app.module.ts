import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OrginizationComponent } from './orginization/orginization.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserCreationComponent } from './setup/user-creation/user-creation.component';
import { UserRolesComponent } from './setup/user-roles/user-roles.component';
import { ChangePsdComponent } from './setup/change-psd/change-psd.component';
import { PhotosUplodeComponent } from './setup/photos-uplode/photos-uplode.component';
import { SMSDetailsComponent } from './setup/sms-details/sms-details.component';
import { CampusEventsComponent } from './setup/campus-events/campus-events.component';
import { CertificateUploadComponent } from './setup/certificate-upload/certificate-upload.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { DownlodeComponent } from './setup/downlode/downlode.component';
import { LoginDetailsComponent } from './setup/login-details/login-details.component';
import { StuLogDisplayComponent } from './setup/stu-log-display/stu-log-display.component';
import { RolesCreationComponent } from './setup/roles-creation/roles-creation.component';
import { MenuRolesComponent } from './setup/menu-roles/menu-roles.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BranchregComponent } from './setup/branchreg/branchreg.component';
import { MatNativeDateModule } from '@angular/material/core';

import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';

import { Setup2Component } from './setup2/setup2.component';

import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { EmplListComponent } from './employee/empl-list/empl-list.component';
import { EmpAttendanceComponent } from './employee/emp-attendance/emp-attendance.component';
import { AddDepartmentComponent } from './employee/add-department/add-department.component';
import { AddDesignationComponent } from './employee/add-designation/add-designation.component';
import { WithdrawalComponent } from './employee/withdrawal/withdrawal.component';
import { AsddComponent } from './all-students/asdd/asdd.component';
import { AttendanceComponent } from './all-students/attendance/attendance.component';
import { StudentsRegComponent } from './all-students/students-reg/students-reg.component';
import { StudentHouseComponent } from './all-students/student-house/student-house.component';
import { AddDocumentComponent } from './all-students/add-document/add-document.component';
import { AddUserComponent } from './employee/add-user/add-user.component';
import { AssignmentComponent } from './all-students/assignment/assignment.component';
import { FeeCollectionComponent } from './all-students/fee-collection/fee-collection.component';
import { LeaveManagementComponent } from './employee/leave-management/leave-management.component';
import { TransportMainComponent } from './transport-main/transport-main.component';
import { LibraryMainComponent } from './library-main/library-main.component';
import { HostelMainComponent } from './hostel-main/hostel-main.component';

import { HostelDetailsComponent } from './hostel/hostel-details/hostel-details.component';
import { HostelRoomComponent } from './hostel/hostel-room/hostel-room.component';
import { HostelAllocationComponent } from './hostel/hostel-allocation/hostel-allocation.component';
import { HostelTransferComponent } from './hostel/hostel-transfer/hostel-transfer.component';
import { HostelRegisterComponent } from './hostel/hostel-register/hostel-register.component';
import { HostelVisitorsComponent } from './hostel/hostel-visitors/hostel-visitors.component';
import { HostelFeeComponent } from './hostel/hostel-fee/hostel-fee.component';
import { InstitutionDetailsComponent } from './settings/institution-details/institution-details.component';
import { AcademicDetailsComponent } from './settings/academic-details/academic-details.component';
import { StudentImportComponent } from './settings/student-import/student-import.component';
import { EmployeeImportComponent } from './settings/employee-import/employee-import.component';
import { AssignCourseComponent } from './settings/assign-course/assign-course.component';
import { UsersComponent } from './settings/users/users.component';
import { ApplicantListComponent } from './settings/applicant-list/applicant-list.component';
import { EmployeeApplicationComponent } from './settings/employee-application/employee-application.component';
import { LoginPageComponent } from './settings/login-page/login-page.component';
import { CastComponent } from './settings/cast/cast.component';
import { VisitorsListComponent } from './settings/visitors-list/visitors-list.component';
import { SettingsMainComponent } from './settings-main/settings-main.component';

import { AcademicsDashboardComponent } from './academics-dashboard/academics-dashboard.component';
import { CourseBatchComponent } from './academics/course-batch/course-batch.component';
import { ELearningComponent } from './academics/e-learning/e-learning.component';
import { SubjectsComponent } from './academics/subjects/subjects.component';
import { LessonPlanningComponent } from './academics/lesson-planning/lesson-planning.component';
import { TimetableComponent } from './academics/timetable/timetable.component';
import { ExamsComponent } from './academics/exams/exams.component';
import { AssignmentsNotesComponent } from './academics/assignments-notes/assignments-notes.component';
import { CertificationsComponent } from './academics/certifications/certifications.component';
import { PromotionAlumniComponent } from './academics/promotion-alumni/promotion-alumni.component';
import { OccurenceComponent } from './academics/occurence/occurence.component';
import { CircularComponent } from './academics/circular/circular.component';

import { AddCategoryComponent } from './library/add-category/add-category.component';
import { AddBooksComponent } from './library/add-books/add-books.component';
import { IssueBooksComponent } from './library/issue-books/issue-books.component';
import { RequestDetailsComponent } from './library/request-details/request-details.component';
import { BookReturnComponent } from './library/book-return/book-return.component';
import { ReportsLibComponent } from './library/reports-lib/reports-lib.component';
import { ImportLibraryComponent } from './library/import-library/import-library.component';
import { ExportLibraryComponent } from './library/export-library/export-library.component';

import { AddvehicleComponent } from './transport/addvehicle/addvehicle.component';
import { AdddriverComponent } from './transport/adddriver/adddriver.component';
import { RouteComponent } from './transport/route/route.component';
import { DestinationComponent } from './transport/destination/destination.component';
import { FeecollectionComponent } from './transport/feecollection/feecollection.component';
import { SmsalertComponent } from './transport/smsalert/smsalert.component';
import { ReportsComponent } from './transport/reports/reports.component';
import { EventtypeComponent } from './events/eventtype/eventtype.component';
import { AddeventsComponent } from './events/addevents/addevents.component';
import { EventreportsComponent } from './events/eventreports/eventreports.component';
import { EnquariComponent } from './enquari/enquari.component';
import { AccountGroupComponent } from './account-group/account-group.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    OrginizationComponent,
    UserCreationComponent,
    UserRolesComponent,
    ChangePsdComponent,
    PhotosUplodeComponent,
    SMSDetailsComponent,
    CampusEventsComponent,
    CertificateUploadComponent,
    DownlodeComponent,
    LoginDetailsComponent,
    StuLogDisplayComponent,
    RolesCreationComponent,
    MenuRolesComponent,
    BranchregComponent,
    StaffComponent,
    StudentsComponent,
    StudentsRegComponent,
    Setup2Component,
    AsddComponent,
    AttendanceComponent,
    AddEmpComponent,
    EmplListComponent,
    EmpAttendanceComponent,
    AddDepartmentComponent,
    AddDesignationComponent,
    WithdrawalComponent,
    StudentHouseComponent,
    AddDocumentComponent,
    AddUserComponent,
    AssignmentComponent,
    FeeCollectionComponent,
    LeaveManagementComponent,
    TransportMainComponent,
    LibraryMainComponent,
    HostelMainComponent,
    SettingsMainComponent,

    HostelDetailsComponent,
    HostelRoomComponent,
    HostelAllocationComponent,
    HostelTransferComponent,
    HostelRegisterComponent,
    HostelVisitorsComponent,
    HostelFeeComponent,
    InstitutionDetailsComponent,
    AcademicDetailsComponent,
    StudentImportComponent,
    EmployeeImportComponent,
    AssignCourseComponent,
    UsersComponent,
    ApplicantListComponent,
    EmployeeApplicationComponent,
    LoginPageComponent,
    CastComponent,
    VisitorsListComponent,

    AcademicsDashboardComponent,
    CourseBatchComponent,
    SubjectsComponent,
    ELearningComponent,
    LessonPlanningComponent,
    TimetableComponent,
    ExamsComponent,
    AssignmentsNotesComponent,
    CertificationsComponent,
    PromotionAlumniComponent,
    OccurenceComponent,
    CircularComponent,
    AddCategoryComponent,
    AddBooksComponent,
    IssueBooksComponent,
    RequestDetailsComponent,
    BookReturnComponent,
    ImportLibraryComponent,
    ExportLibraryComponent,
    ReportsLibComponent,

    AddvehicleComponent,
    AdddriverComponent,
    RouteComponent,
    DestinationComponent,
    FeecollectionComponent,
    SmsalertComponent,
    ReportsComponent,
    EventtypeComponent,
    AddeventsComponent,
    EventreportsComponent,
    EnquariComponent,
    AccountGroupComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatExpansionModule,
    NgxMatFileInputModule,
    AngularFileUploaderModule,
    MatDialogModule,
    MatNativeDateModule,
    NgxMatTimepickerModule,
    NgxPaginationModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

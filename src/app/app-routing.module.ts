import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { OrginizationComponent } from './orginization/orginization.component';
import { BranchregComponent } from './setup/branchreg/branchreg.component';
import { CampusEventsComponent } from './setup/campus-events/campus-events.component';
import { CertificateUploadComponent } from './setup/certificate-upload/certificate-upload.component';
import { ChangePsdComponent } from './setup/change-psd/change-psd.component';
import { DownlodeComponent } from './setup/downlode/downlode.component';
import { LoginDetailsComponent } from './setup/login-details/login-details.component';
import { MenuRolesComponent } from './setup/menu-roles/menu-roles.component';
import { PhotosUplodeComponent } from './setup/photos-uplode/photos-uplode.component';
import { RolesCreationComponent } from './setup/roles-creation/roles-creation.component';
import { SMSDetailsComponent } from './setup/sms-details/sms-details.component';
import { StuLogDisplayComponent } from './setup/stu-log-display/stu-log-display.component';
import { UserCreationComponent } from './setup/user-creation/user-creation.component';
import { UserRolesComponent } from './setup/user-roles/user-roles.component';
import { LoginComponent } from './login/login.component';
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
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'org', component: OrginizationComponent },
  { path: 'branch', component: BranchregComponent },
  { path: 'usercreation', component: UserCreationComponent },
  { path: 'userroles', component: UserRolesComponent },
  { path: 'changpsd', component: ChangePsdComponent },
  { path: 'uplode', component: PhotosUplodeComponent },
  { path: 'sms', component: SMSDetailsComponent },
  { path: 'campus', component: CampusEventsComponent },
  { path: 'certificate', component: CertificateUploadComponent },
  { path: 'downlode', component: DownlodeComponent },
  { path: 'logdetails', component: LoginDetailsComponent },
  { path: 'stulog', component: StuLogDisplayComponent },
  { path: 'rolescreat', component: RolesCreationComponent },
  { path: 'menu', component: MenuRolesComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'studentdash', component: StudentsComponent },
  { path: 'studentReg', component: StudentsRegComponent },
  { path: 'setup2', component: Setup2Component },
  { path: 'asd', component: AsddComponent },
  { path: 'Atten', component: AttendanceComponent },
  { path: 'addemp', component: AddEmpComponent },
  { path: 'emplist', component: EmplListComponent },
  { path: 'empatten', component: EmpAttendanceComponent },
  { path: 'addDep', component: AddDepartmentComponent },
  { path: 'adddesig', component: AddDesignationComponent },
  { path: 'with', component: WithdrawalComponent },
  { path: 'stdhouse', component: StudentHouseComponent },
  { path: 'doctype', component: AddDocumentComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'assing', component: AssignmentComponent },
  { path: 'feecol', component: FeeCollectionComponent },
  { path: 'leave', component: LeaveManagementComponent },
  { path: 'trans', component: TransportMainComponent },
  { path: 'lib', component: LibraryMainComponent },
  { path: 'hostel', component: HostelMainComponent },
  { path: 'setting-main', component: SettingsMainComponent },
  { path: 'enk', component: EnquariComponent },

  // nethra
  { path: 'hostel-details', component: HostelDetailsComponent },
  { path: 'hostel-room', component: HostelRoomComponent },
  { path: 'hostel-allocation', component: HostelAllocationComponent },
  { path: 'hostel-transfer', component: HostelTransferComponent },
  { path: 'hostel-register', component: HostelRegisterComponent },
  { path: 'hostel-visitors', component: HostelVisitorsComponent },
  { path: 'hostel-fee', component: HostelFeeComponent },
  { path: 'institution-details', component: InstitutionDetailsComponent },
  { path: 'academic-details', component: AcademicDetailsComponent },
  { path: 'student-import', component: StudentImportComponent },
  { path: 'employee-import', component: EmployeeImportComponent },
  { path: 'assign-course', component: AssignCourseComponent },
  { path: 'users', component: UsersComponent },
  { path: 'applicant-list', component: ApplicantListComponent },
  { path: 'employee-application', component: EmployeeApplicationComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'cast', component: CastComponent },
  { path: 'visitors-list', component: VisitorsListComponent },
  // nethra
  //  ajay
  { path: 'Academics-Dashboard', component: AcademicsDashboardComponent },
  { path: 'Course-batch', component: CourseBatchComponent },
  { path: 'Subjects', component: SubjectsComponent },
  { path: 'E-Learning', component: ELearningComponent },
  { path: 'Lesson-Planning', component: LessonPlanningComponent },
  { path: 'Timetable', component: TimetableComponent },
  { path: 'Exams', component: ExamsComponent },
  { path: 'Assignments-Notes', component: AssignmentsNotesComponent },
  { path: 'Certifications', component: CertificationsComponent },
  { path: 'Promotion-Alumni', component: PromotionAlumniComponent },
  { path: 'Occurence', component: OccurenceComponent },
  { path: 'Circular', component: CircularComponent },

  // lib
  { path: 'add-Category', component: AddCategoryComponent },
  { path: 'Add-Books', component: AddBooksComponent },
  { path: 'Issue-Book', component: IssueBooksComponent },
  { path: 'Request-Details', component: RequestDetailsComponent },
  { path: 'Book-Return', component: BookReturnComponent },
  { path: 'Import-Library', component: ImportLibraryComponent },
  { path: 'Export-Library', component: ExportLibraryComponent },
  { path: 'reportslib', component: ReportsLibComponent },

  // ajay
  // farahana
  { path: 'addvehicle', component: AddvehicleComponent },
  { path: 'adddriver', component: AdddriverComponent },
  { path: 'route', component: RouteComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'feecollection', component: FeecollectionComponent },
  { path: 'smsalert', component: SmsalertComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'eventtype', component: EventtypeComponent },
  { path: 'addevents', component: AddeventsComponent },
  { path: 'eventreports', component: EventreportsComponent },
  { path: 'accountsgroup', component: AccountGroupComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

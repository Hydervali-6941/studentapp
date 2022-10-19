import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionDetailsComponent } from './institution-details/institution-details.component';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { StudentImportComponent } from './student-import/student-import.component';
import { EmployeeImportComponent } from './employee-import/employee-import.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';
import { UsersComponent } from './users/users.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { EmployeeApplicationComponent } from './employee-application/employee-application.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CastComponent } from './cast/cast.component';
import { VisitorsListComponent } from './visitors-list/visitors-list.component';



@NgModule({
  declarations: [
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
    VisitorsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }

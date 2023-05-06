import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseViewComponent} from "./course-view/course-view.component";
import {CourseAddComponent} from "./course-add/course-add.component";
import {ViewStudentComponent} from "./view-student/view-student.component";
import {NewStudentComponent} from "./new-student/new-student.component";
import {ViewAdmissionComponent} from "./view-admission/view-admission.component";
import {NewAdmissionComponent} from "./new-admission/new-admission.component";
import {ViewPaymentComponent} from "./view-payment/view-payment.component";
import {NewPaymentComponent} from "./new-payment/new-payment.component";

const routes: Routes = [
  {path:"allCourse/new",component:CourseAddComponent},
  {path:"allCourse",component:CourseViewComponent},
  {path:"student",component:ViewStudentComponent},
  {path:"addStudent",component:NewStudentComponent},
  {path:"admission", component:ViewAdmissionComponent},
  {path:"admission/newAdmission", component:NewAdmissionComponent},
  {path:"payment",component:ViewPaymentComponent},
  {path:"addPayment",component:NewPaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

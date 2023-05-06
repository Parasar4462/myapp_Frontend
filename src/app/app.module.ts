import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

import { CourseViewComponent } from './course-view/course-view.component'
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import { CourseAddComponent } from './course-add/course-add.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {TabMenuModule} from "primeng/tabmenu";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { ViewAdmissionComponent } from './view-admission/view-admission.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import {RippleModule} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    AppComponent,
    CourseViewComponent,
    CourseAddComponent,
    NavMenuComponent,
    NewAdmissionComponent,
    ViewAdmissionComponent,
    NewStudentComponent,
    ViewStudentComponent,
    ViewPaymentComponent,
    NewPaymentComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastModule,
        TableModule,
        ButtonModule,
        TabMenuModule,
        InputTextModule,
        InputTextareaModule,
        RippleModule,
        DropdownModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

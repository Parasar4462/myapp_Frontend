import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule} from "@angular/forms";
import {AdmissionServiceService} from "../../services/admission-service.service";
import { Dropdown } from 'primeng/dropdown';


@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.css']
})
export class NewAdmissionComponent {
  msg:string=""
  course:any[]=[]



  admissionData:[]=[];

  flag :boolean=true;

  admissionInfo = new FormGroup(
    {
      admissionNo:new FormControl(),
      surname : new FormControl(),
      name: new FormControl(),
      fatherName : new FormControl(),
      motherName : new FormControl(),
      adharCardNo : new FormControl(),
      dateOfBirth:new FormControl(),
      placeofBirth : new FormControl(),

      pysicalProblemsOrDisability: new FormControl(),
      cast:new FormControl(),
      motherTongue : new FormControl(),
      category: new FormControl(),
      religion : new FormControl(),
      address : new  FormControl(),
      photo : new FormControl(),
      adharCard : new FormControl(),
      course : new FormControl(),
      admissionDate : new FormControl(),
      contectNo : new FormControl(),
      email : new FormControl(),
      batch:new FormControl()



    })
cities: any;
  courses: any=[];
  constructor(public admissionservice:AdmissionServiceService) {
  }

  addAdmission(){
    console.log(this.admissionInfo.value)
    if(this.flag=true){
      this.admissionservice.newAdmission(this.admissionInfo.value).subscribe(result=>{
        this.msg=result
        this.viewAdmission()
      })
    }
    else{
        this.admissionservice.updateAdmission(this.admissionInfo.value).subscribe(result=>{
          this.msg=result;
          this.viewAdmission()

        })
      }
      this.admissionInfo.reset()
    this.flag=true;


  }

  viewAdmission(){
    this.admissionservice.viewAdmission().subscribe(result=>{
      console.log(result)
      this.admissionData=result

    })
}
dropdownCourse(){
  this.admissionservice.getCourseInDropDown().subscribe(result=>{
    this.course=result
    console.log(this.course)
  })}



}


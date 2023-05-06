import { Component } from '@angular/core';
import { AdmissionServiceService } from 'src/services/admission-service.service';

@Component({
  selector: 'app-view-admission',
  templateUrl: './view-admission.component.html',
  styleUrls: ['./view-admission.component.css']
})
export class ViewAdmissionComponent {

  constructor(public admissionservice:AdmissionServiceService) { 
    this.admissionview()
  }
  admissiondata:any[]=[];
  msg:string="";
  
  admissionview(){
    this.admissionservice.viewAdmission().subscribe(result=>{
      console.log(result)
      this.admissiondata=result;
    })
  }
  edit(admission:any){
    this.admissionservice.updateAdmission(admission).subscribe(result=>{
      console.log(result)
      this.admissionview();
    }
    )

  }

  deleteadmission(admission:any){
    this.admissionservice.deleteAdmission(admission).subscribe(result =>{
      console.log(result)
      this.admissionview();
    })
    console.log(admission);
  }

}

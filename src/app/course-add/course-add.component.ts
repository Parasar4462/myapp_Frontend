import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule} from "@angular/forms";
import {CourseServiceService} from "../../services/course-service.service";
@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {
  msg:string=""

  coursedata:[]=[]

  isNew:boolean=true

  courseinfo=new FormGroup({

    id:new FormControl(),
    name : new FormControl(),
    description: new FormControl(),
    fees : new FormControl(),
    discount : new FormControl()
  })

  constructor(public courseservise:CourseServiceService) {
  }
  save(){
    console.log(this.courseinfo.value)
    if(this.isNew=true){
      this.courseservise.newcourse(this.courseinfo.value).subscribe(result=>{
        this.msg=result
        this.view();
      })
    }  else
    {
      this.courseservise.updatecourse(this.courseinfo.value).subscribe(result=>
      {
        this.msg=result
        this.view()
      })


    }
    this.courseinfo.reset()
    this.isNew=true
  }
  view(){
    this.courseservise.viewcourse().subscribe( result=>{
      console.log(result)
      this.coursedata=result
    })
  }

}

import { Component } from '@angular/core';
import {CourseServiceService} from "../../services/course-service.service";

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent {
  coursedata:any[]=[];
  msg:string="";
  constructor(public courseservice:CourseServiceService ) {
    this.view()

  }

view(){
this.courseservice.viewcourse().subscribe(result=>{
  console.log(result)
this.coursedata=result;


})

}
edit(course:any){
  this.courseservice.updatecourse(course).subscribe(result=>{
    console.log(result)
    this.view();
  }
  )

}

delete(course:any){
  this.courseservice.deletecourse(course.id).subscribe(result =>{
    console.log(result)
    this.view();
  })
  console.log(course);
}

}

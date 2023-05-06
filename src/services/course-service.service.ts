import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(public http:HttpClient) {}

  newcourse(course:any):Observable<any>{
    return this.http.post("http://localhost:8000/course",course,{responseType:"text"})
  }

  viewcourse():Observable<any>{

    return this.http.get<any>("http://localhost:8000/course")
  }
  updatecourse(course:any):Observable<any>{
      return this.http.put("http://localhost:8000/course/",course,{responseType:"text"})
  }

  deletecourse(course:any):Observable<any>{
    console.log("in service :",course);
    return this.http.delete(`http://localhost:8000/course/${course.id}`, {responseType:"text"})
  }

}

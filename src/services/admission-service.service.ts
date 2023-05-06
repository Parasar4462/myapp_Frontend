import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdmissionServiceService {

  constructor(public http:HttpClient) { }

  newAdmission (admission:any):Observable<any>{
    return this.http.post("http://localhost:8000/admission",admission,{responseType:"text"})
}
 viewAdmission ():Observable<any>{
   return this.http.get("http://localhost:8000/admission")

 }
 updateAdmission(admission:any):Observable<any>{
   return this.http.put("http://localhost:8000/admission",admission,{responseType:"text"})

 }
 deleteAdmission(admission:any):Observable<any>{
     console.log("in service :",admission);
     return this.http.delete(`http://localhost:8000/admission/${admission.id}`, {responseType:"text"})

 }
 getCourseInDropDown():Observable<any>{
    return this.http.get("http://localhost:8000/course")
  }
  

}

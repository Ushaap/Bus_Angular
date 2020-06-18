const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusService {
  

  constructor(private http:HttpClient) {}

    
    registerUser(data):Observable<any>{
      console.log(data)
      return this.http.post("http://localhost:3000/register",data)
    }
    loginUser(data):Observable<any>{
      console.log(data)
      return this.http.post("http://localhost:3000/login",data)
    }
    getuserprofileinfo(data):Observable<any>
    {
      return this.http.post("http://localhost:3000/profile",data)
    }
    editprofile(data):Observable<any>
    {
      return this.http.post("http://localhost:3000/editprofile",data)
    }
  }


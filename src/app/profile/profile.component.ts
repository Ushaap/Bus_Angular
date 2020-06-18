import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  pass
  constructor(private busservice:BusService , private router:Router) {

  var passdata=
  {
    email:localStorage.getItem("email"),
    uniqueid:localStorage.getItem("uniqueid"),
    
  }

  this.busservice.getuserprofileinfo(passdata).subscribe((data)=>{
    console.log(data.data)
    this.pass = data.data
  
  })

 }

ngOnInit(): void {
}
editprofile()
{
  this.router.navigate(['editprofile'])

}
}

import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  editform;
  pass;
  constructor(private busservice:BusService , private router:Router) { 

    var userdata=
    {
      email:localStorage.getItem("email"),
      uniqueid:localStorage.getItem("uniqueid"),
    }

    this.busservice.getuserprofileinfo(userdata).subscribe((data)=>{
      console.log(data.data)
      this.pass = data.data
      this.editform = new FormGroup({
        name : new FormControl(this.pass.name,Validators.required),
        email:new FormControl(this.pass.email,[Validators.required,Validators.email]),
        phone:new FormControl(this.pass.contact,Validators.required),
       
     })
    
    })
   
  }

  ngOnInit(): void {
  }
  editdata()
  {  
    if(this.editform.valid)
    {
  this.editform.value.uniqueid=localStorage.getItem("uniqueid")
    this.busservice.editprofile(this.editform.value).subscribe((data)=>{
      console.log(data)
      
    this.router.navigate(['profile'])
    })
  }
  }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from'@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform;
  constructor(private busservice:BusService,private router:Router) {
    this.registerform = new FormGroup({
      name : new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      confirmpassword: new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      bus: new FormControl()
   })
  }

  ngOnInit(): void {
    
  }
  createdata()
  {
    if(this.registerform.valid){
    console.log(this.registerform.value)
    if(this.registerform.value.bus ==true)
    {
      this.registerform.value.accstatus ="pending"
    }
    this.busservice.registerUser(this.registerform.value).subscribe((data)=>{
      console.log(data)
      this.router.navigate(['login'])

    })
  }
  }


}

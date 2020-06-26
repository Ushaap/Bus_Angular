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
  result;
  constructor(private busservice:BusService,private router:Router) {
    this.registerform = new FormGroup({
      'type':new FormControl('',Validators.required),
      'dob':new FormControl(''),
      'name': new FormControl('', Validators.required),      
      'email': new FormControl('', [Validators.email, Validators.required]),
      'phone':new FormControl('',Validators.minLength(10)),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    
   })
  }

  ngOnInit(): void {
    
  }
  createdata()
  {
    if(this.registerform.valid)
    {
      console.log(this.registerform.value);
      this.busservice.registerUser(this.registerform.value).subscribe((data)=>{
        this.result=data;
        console.log(this.result)
        this.router.navigate(['/login']);
      })
    }
  }

}
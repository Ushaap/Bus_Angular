import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bus-operator',
  templateUrl: './bus-operator.component.html',
  styleUrls: ['./bus-operator.component.css']
})
export class BusOperatorComponent implements OnInit {
busData;
  constructor(private busservice:BusService) {
    this.busData=new FormGroup({
      'travelname':new FormControl('',Validators.required),
      'source':new FormControl('',Validators.required),
      'destination':new FormControl('',Validators.required),
      'busNum':new FormControl('',Validators.required),
      'departDate':new FormControl('',Validators.required),
      'departTime':new FormControl('',Validators.required),
      'arrivalDate':new FormControl('',Validators.required),
      'arrivalTime':new FormControl('',Validators.required),
      'avlSeats':new FormControl('',Validators.required)
   })
  }
  ngOnInit(): void {
  }
  addbus()
  {
    if(this.busData.valid)
    {
      this.busservice.addbusData(this.busData.value).subscribe((data)=>{

        console.log(data);
      })
    }
  }
}

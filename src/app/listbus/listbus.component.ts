import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-listbus',
  templateUrl: './listbus.component.html',
  styleUrls: ['./listbus.component.css']
})
export class ListbusComponent implements OnInit {
  allBus;
  constructor(private busservice:BusService) { }

  ngOnInit(): void {

    this.busservice.getBuses().subscribe((data)=>{
      this.allBus=data;
    })
  }

}
import { Component, OnInit } from '@angular/core';
import { guestDTO } from '../guest.model';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-list-guest',
  templateUrl: './list-guest.component.html',
  styleUrls: ['./list-guest.component.css']
})
export class ListGuestComponent implements OnInit {


  guests:guestDTO[];

  constructor(private guestService:GuestService) {
    this.guests=[];
   }


  
  ngOnInit(): void {
    return this.loadGuests();
  }

  loadGuests():void{
    this.guestService.getAllGuests().subscribe((guestList:guestDTO[])=>{
      this.guests=guestList;
    })
    }
  

}

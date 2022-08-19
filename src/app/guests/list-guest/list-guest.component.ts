import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { guestDTO } from '../guest.model';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-list-guest',
  templateUrl: './list-guest.component.html',
  styleUrls: ['./list-guest.component.css']
})
export class ListGuestComponent implements OnInit {


  guests:guestDTO[];

  constructor(private guestService:GuestService, private router:Router) {
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

  navigateToHome(){
    this.router.navigate(['/'])
  }

  navigateToAddGuest(){
    this.router.navigate(['/guests/create'])
  }

  deleteGuest(id:number){
    this.guestService.deleteGuest(id).subscribe(()=>{
    this.loadGuests();}
    )
  }
  

}

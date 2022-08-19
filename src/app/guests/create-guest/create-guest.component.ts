import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { guestCreationDTO } from '../guest.model';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.css']
})
export class CreateGuestComponent implements OnInit {

  constructor(private guestService:GuestService, private router:Router) { }

  ngOnInit(): void {
  }

  saveChanges(newGuestDetails:guestCreationDTO){
      this.guestService.addGuest(newGuestDetails).subscribe(()=>{
        this.router.navigate(['/guests'])
      })
  }

}

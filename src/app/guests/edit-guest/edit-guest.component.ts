import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { guestCreationDTO,guestDTO } from '../guest.model';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent implements OnInit {

  model!:guestDTO;
  constructor(private guestService:GuestService, private router:Router, private activatedroute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params)=>{
        this.guestService.getGuestById(params['id']).subscribe((guest:guestDTO)=>{
          this.model = guest;
        })
    });
  }

  saveChanges(guestUpdateDetails:guestCreationDTO){
    this.guestService.updateGuest(this.model.id,guestUpdateDetails).subscribe(()=>{
      this.router.navigate(['/guests']);
    })
  }

}

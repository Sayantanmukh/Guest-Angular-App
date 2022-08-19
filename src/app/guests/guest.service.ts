import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { guestCreationDTO, guestDTO } from './guest.model';


@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private apiURL = 'http://localhost:5000/guests';

  constructor(private httpClient:HttpClient) { }

  getAllGuests(){ 
    return this.httpClient.get<guestDTO[]>(this.apiURL);
  }

  getGuestById(id:number){
    return this.httpClient.get<guestDTO>(`${this.apiURL}/${id}`);
   }

  addGuest(guest:guestCreationDTO){ 
    return this.httpClient.post(this.apiURL,{...guest,id:Math.floor(Math.random() * 5000)});
  }

  updateGuest(id:number,guest:guestCreationDTO) {
    return this.httpClient.put(`${this.apiURL}/${id}`,guest)
   }

  deleteGuest(id:number) {
    return this.httpClient.delete(`${this.apiURL}/${id}`)
   }

}

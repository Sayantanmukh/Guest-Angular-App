import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { guestDTO } from './guest.model';


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

  addGuest(){ }

  updateGuest() { }

  deleteGuest() { }

}

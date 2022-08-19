import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateGuestComponent } from './guests/create-guest/create-guest.component';
import { EditGuestComponent } from './guests/edit-guest/edit-guest.component';
import { ListGuestComponent } from './guests/list-guest/list-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGuestComponent,
    EditGuestComponent,
    ListGuestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

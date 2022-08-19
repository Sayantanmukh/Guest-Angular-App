import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateGuestComponent } from './guests/create-guest/create-guest.component';
import { EditGuestComponent } from './guests/edit-guest/edit-guest.component';
import { ListGuestComponent } from './guests/list-guest/list-guest.component';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { FormGuestComponent } from './guests/form-guest/form-guest.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  { path: '', component: HomeComponent }, // http://localhost:4200
  { path: 'guests', component: ListGuestComponent }, // http://localhost:4200/guests
  { path: 'guests/create', component: CreateGuestComponent }, // http://localhost:4200/guests/create
  { path: 'guests/edit/:id', component: EditGuestComponent }, // http://localhost:4200/guests/edit/1
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    CreateGuestComponent,
    EditGuestComponent,
    ListGuestComponent,
    
    HomeComponent,
         FormGuestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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


const routes:Routes=[
  {path:'', component:HomeComponent},
  {path:'guests', component:ListGuestComponent},
  {path:'guests/create', component:CreateGuestComponent},
  {path:'guests/edit/:id', component:EditGuestComponent},
  // {path}
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

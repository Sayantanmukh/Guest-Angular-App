import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { guestCreationDTO } from '../guest.model';

@Component({
  selector: 'app-form-guest',
  templateUrl: './form-guest.component.html',
  styleUrls: ['./form-guest.component.css']
})
export class FormGuestComponent implements OnInit {


  form:FormGroup
  
  @Input()
  model!:guestCreationDTO;


  @Output()
  guestEvent:EventEmitter<guestCreationDTO>;

  constructor(private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
      guestName:''
    });
    this.guestEvent=new EventEmitter<guestCreationDTO>();
  }


  ngOnInit(): void {
    if(this.model !== undefined)
      this.form.patchValue(this.model);
  }
  saveChanges(){
    //Trigger the custom event
    this.guestEvent.emit(this.form.value);
  }

}

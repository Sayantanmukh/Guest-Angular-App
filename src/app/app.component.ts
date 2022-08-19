import { Component } from '@angular/core';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  today:Date;
  persons:Person[];

  constructor(){
    this.title='test application';
    this.today=new Date();
    this.persons=[];
  }

  ngOnInit():void{
    this.persons=[
      {name:'Saurav',age:22},
      {name:'Sachin',age:33},
      {name:'Virat',age:44}
    ]
  }
}

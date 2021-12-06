import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarService, date } from '../service/calendar.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() day!: date;
  today: number;
  isToday: boolean = false;
  
  constructor() { 
    this.today = moment().get('date');
   }

  ngOnInit(): void {
    console.log(this.day.date);
    this.isToday = (moment().startOf('date').format() == this.day.moment.format());
  }

  onDate() {
    console.log(moment().startOf('date').format());
    console.log(this.day.moment.format());
  }

}

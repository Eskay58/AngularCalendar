import { Component, OnInit } from '@angular/core';
import  * as moment from 'moment';
import { CalendarService, date } from '../service/calendar.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  currentDate: string;
  youbi: string[] = ['日','月','火','水','木','金','土'];
  calendars: date[][]

  constructor(
    calendarService: CalendarService,
  ) { 
    this.calendars = calendarService.createCalendar();
    this.currentDate = `${calendarService.currentDate.get('month')}`;
  }

  ngOnInit(): void {
    
    
  }


}

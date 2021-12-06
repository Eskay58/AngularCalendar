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
    private calendarService: CalendarService,
  ) { 
    this.calendars = calendarService.getCalendar();
    this.currentDate = calendarService.currentDate.format();
  }

  ngOnInit(): void {
  }

  onNext() {
    this.calendarService.nextMonth();
    this.calendars = this.calendarService.getCalendar();
    this.currentDate = this.calendarService.currentDate.format();
  }
  onReturn() {
    this.calendarService.returnMonth();
    this.calendars = this.calendarService.getCalendar();
    this.currentDate = this.calendarService.currentDate.format();
  }

}

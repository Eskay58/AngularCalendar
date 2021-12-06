import { Injectable } from '@angular/core';
import  * as moment from 'moment';

export interface date {
  date: number,
  moment: moment.Moment
}

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  currentDate = moment();

  getCalendar(): date[][] {
    // this.date.add(1, 'month');
    let startDate: moment.Moment = moment(this.currentDate).startOf('month');
    let startIndex: number = startDate.day();
    let endIndex: number = moment(this.currentDate).endOf('month').date();
    startDate.subtract(startIndex, 'days');

    let weekCount: number = (startIndex + endIndex) < 35 ? 5 : 6;
    let calendars: date[][] = [];
    for(let week = 0; week < weekCount; week++) {
      let weekRow: date[] = [];
      for(let day = 0; day < 7; day++) {
        // weekRow.push({date: startDate.get('date')});
        weekRow.push({date: startDate.get('date'), moment: moment(startDate)});
        startDate.add(1 ,'days')
      }
      calendars.push(weekRow);
      weekRow = [];
      
    }
    console.log(calendars);
    return calendars;
  }

  nextMonth() {
    this.currentDate.add(1, 'month');
  }

  returnMonth() {
    this.currentDate.subtract(1, 'month');
  }
}

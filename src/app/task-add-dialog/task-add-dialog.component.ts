import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { CalendarService } from '../service/calendar.service';
import { TaskService } from '../service/task.service';

export interface DialogData {
  title: string,
  date: _moment.Moment, 
}

const moment = _moment;

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.css'],
    providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class TaskAddDialogComponent implements OnInit {
  title!: string;
  location!: string;
  description!: string;
  date!: _moment.Moment;
  
  // moment = moment(this.date);

  constructor(
    public dialogRef: MatDialogRef<TaskAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private calendarService: CalendarService,
    private taskService: TaskService,
  ) { 
    this.date = data.date
   }

  ngOnInit(): void {
  }

  onSave() {
    if (this.title && this.date){
      this.taskService.addTask(this.title ,this.date, this.location, this.description);
    }
    this.dialogRef.close();
  }

  onLog() {
  }
}

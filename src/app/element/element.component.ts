import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarService, date } from '../service/calendar.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { Task, TaskService } from '../service/task.service';
import { TaskInfoDialogComponent } from '../task-info-dialog/task-info-dialog.component';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() day!: date;
  today: number;
  isToday: boolean = false;
  isNotThisMonth: boolean = false;

  dateTaskList: Task[] = [];
  
  constructor(
    private calendarService: CalendarService,
    public dialog: MatDialog,
    private taskService: TaskService,
    ) { 
    this.today = moment().get('date');
   
   }

  ngOnInit(): void {
    this.checkDate();
    // this.dateTaskList = this.taskService.getDateTaskList(this.day.moment);
    this.taskService.taskListSubject.subscribe(list => {
      this.dateTaskList = list.filter(d => 
        d.date.format() === this.day.moment.format())
    });
    console.log(this.day.date);
  }

  onDate() {
    const dialogRef = this.dialog.open(TaskAddDialogComponent, {
      width: '300px',
      data: {date: this.day.moment,}
    });
  }

  onTask(task: Task) {
    const dialogRef = this.dialog.open(TaskInfoDialogComponent, {
      width: '300px',
      data: task
    });
  }

  checkDate() {
    this.isNotThisMonth = this.day.moment.format("MMMM") !== this.calendarService.currentDate.format("MMMM");
    this.isToday = (moment().startOf('date').format() == this.day.moment.format());
  }

}
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  title: string,
  date: moment.Moment,
  location?: string,
  description?: string,
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  taskList: Task[] = [
    {
    title: 'today\'s task',
    date: moment().startOf('days'),
    location: 'Your home',
    description: 'play',
  },];

  taskListSubject = new BehaviorSubject<Task[]>(this.taskList);

  constructor() { }

  addTask(title: string, date: moment.Moment, location?: string, description?: string) {
    this.taskList.push({
      title: title,
      date: date,
      location: !!location ? location : '(none)',
      description: !!description ? description : '(none)',
    });
    this.taskListSubject.next(this.taskList);
    console.log(this.taskList);
  }

  deleteTask(task: Task) {
    const index = this.taskList.findIndex(t => t === task);
    if (!(index === -1)) {
      this.taskList.splice(index, 1);
      this.taskListSubject.next(this.taskList);
    }
  }
}

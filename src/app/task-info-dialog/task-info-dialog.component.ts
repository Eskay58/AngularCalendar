import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task, TaskService } from '../service/task.service';
import { DialogData } from '../task-add-dialog/task-add-dialog.component';

@Component({
  selector: 'app-task-info-dialog',
  templateUrl: './task-info-dialog.component.html',
  styleUrls: ['./task-info-dialog.component.css']
})
export class TaskInfoDialogComponent implements OnInit {
  title!: string;
  date!: string;

  constructor(
    public dialogRef: MatDialogRef<TaskInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.taskService.deleteTask(task);
    this.dialogRef.close();
  }

}

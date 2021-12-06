import { Component, Input, OnInit } from '@angular/core';
import { date } from '../service/calendar.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() day!: date;

  constructor() { }

  ngOnInit(): void {
    console.log(this.day);
  }

}

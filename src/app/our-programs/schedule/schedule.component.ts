import { Component, OnInit } from '@angular/core';

export interface Holiday {
  holiday: string;
  dayAmount: number;

}

const ELEMENT_DATA: Holiday[] = [
  {dayAmount: 1, holiday: "New Year's Day"},
  {dayAmount: 1, holiday: "Dr. Martin Luther King Day"},
  {dayAmount: 1, holiday: "Memorial Day"},
  {dayAmount: 1, holiday: "Independence Day "},
  {dayAmount: 1, holiday: "Labor Day"},
  {dayAmount: 2, holiday: "Thanksgiving"},
  {dayAmount: 2, holiday: "Christmas"},
];


export interface DailyCalander {
  time: string;
  activity: string;
}

const HOLIDAY_ELEMENT_DATA: DailyCalander[] = [
  {time: '6:30am', activity: "Center Opens"},
  {time: '8:00am - 8:30am', activity: "Breakfast"},
  {time: '11:00am - 12:00pm', activity: "Lunch"},
  {time: '2:00pm - 2:30pm', activity: "Daily Rest Period"},
  {time: '2:00pm - 2:30pm', activity: "Snack Will Be Provided Daily"},
  {time: '6:00pm', activity: "Center Closes"},
];

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  displayedColumns: string[] = ['Holiday', 'Day Amount']
  dataSource = ELEMENT_DATA;

  dailyDisplayedColumns: string [] = ['Time', 'Activity']
  dailyDataSource = HOLIDAY_ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

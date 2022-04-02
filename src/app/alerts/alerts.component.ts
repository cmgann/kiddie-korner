import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  active: boolean = true

  constructor() { }
  ngOnInit(): void {
  };

  deactivate() {
    this.active = false
  }

}


import { Component, OnInit } from '@angular/core';

import { AppService } from '../shared/app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  deviceInfo: any = this.appService.deviceInfo;
  isMobile: boolean = this.appService.isMobile;
  isTablet: boolean = this.appService.isTablet;
  isDesktop: boolean = this.appService.isDesktop;

  constructor(private appService: AppService) {
   }

  ngOnInit(): void {
  }

}

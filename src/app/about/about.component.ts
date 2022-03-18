import { Component, OnInit } from '@angular/core';

import { AppService } from '../shared/app.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  deviceInfo: any = this.appService.deviceInfo;
  isMobile: boolean = this.appService.isMobile;
  isTablet: boolean = this.appService.isTablet;
  isDesktop: boolean = this.appService.isDesktop;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

}

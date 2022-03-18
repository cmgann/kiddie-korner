import { Component, OnInit } from '@angular/core';

import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  deviceInfo: any = this.appService.deviceInfo;
  isMobile: boolean = this.appService.isMobile;
  isTablet: boolean = this.appService.isTablet;
  isDesktop: boolean = this.appService.isDesktop;

  constructor( private appService: AppService ) { 
  };

  ngOnInit(): void {
    this.getDeviceInfo();
  };

  getDeviceInfo() {
    this.appService.getDeviceInfo()
    this.updateVars()
  };

  updateVars(){
    this.deviceInfo = this.appService.deviceInfo;
    this.isMobile = this.appService.isMobile;
    this.isTablet = this.appService.isTablet;
    this.isDesktop = this.appService.isDesktop;
  }
};

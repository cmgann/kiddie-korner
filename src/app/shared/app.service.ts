import { Injectable, EventEmitter } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  updateService = new EventEmitter<string>();

  deviceInfo: any;
  isMobile: boolean = false;
  isTablet: boolean = false;
  isDesktop: boolean = false;

  constructor( private deviceService: DeviceDetectorService) { }

  getDeviceInfo() {
    //this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktop = this.deviceService.isDesktop();
  }
}

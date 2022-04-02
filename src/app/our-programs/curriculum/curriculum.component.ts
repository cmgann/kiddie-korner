import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  deviceInfo: any = this.appService.deviceInfo;
  isMobile: boolean = this.appService.isMobile;
  isTablet: boolean = this.appService.isTablet;
  isDesktop: boolean = this.appService.isDesktop;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

}

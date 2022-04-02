import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  deviceInfo: any = this.appService.deviceInfo;
  isMobile: boolean = this.appService.isMobile;
  isTablet: boolean = this.appService.isTablet;
  isDesktop: boolean = this.appService.isDesktop;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

}

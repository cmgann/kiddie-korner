import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  isMobile = this.appService.isMobile
  isTablet = this.appService.isTablet
  isDesktop = this.appService.isDesktop

  cols!: number;
  rowHeight!: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.setGrids()
  }

  setGrids(){
    if (this.isMobile){
      this.cols = 1
      this.rowHeight = '1:.7'
    } else {
      this.cols = 2
      this.rowHeight = '2:1'
    }
  }

}

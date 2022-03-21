import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';

@Component({
  selector: 'app-header-cards',
  templateUrl: './header-cards.component.html',
  styleUrls: ['./header-cards.component.css']
})
export class HeaderCardsComponent implements OnInit {

  isMobile = this.appService.isMobile
  rowheight: string = '2:1'
  cols: string = '3'

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.mobileTileAdjust()
  }

  mobileTileAdjust() {
    if (this.isMobile == true) {
      console.log('is mobile')
      this.rowheight = '3:2'
      this.cols = '1'
    }
  }
}

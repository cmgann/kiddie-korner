import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-curriculum-mobile',
  templateUrl: './curriculum-mobile.component.html',
  styleUrls: ['./curriculum-mobile.component.css']
})
export class CurriculumMobileComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}

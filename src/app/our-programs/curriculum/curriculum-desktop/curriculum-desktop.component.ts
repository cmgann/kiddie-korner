import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion  } from '@angular/material/expansion';

@Component({
  selector: 'app-curriculum-desktop',
  templateUrl: './curriculum-desktop.component.html',
  styleUrls: ['./curriculum-desktop.component.css']
})
export class CurriculumDesktopComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}

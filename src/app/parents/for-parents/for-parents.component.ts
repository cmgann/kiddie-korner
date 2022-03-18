import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-for-parents',
  templateUrl: './for-parents.component.html',
  styleUrls: ['./for-parents.component.css']
})
export class ForParentsComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;


  constructor() { }

  ngOnInit(): void {
  }

}

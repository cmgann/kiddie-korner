import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title!: string;
  url!: string;

  constructor(
    private router: Router,
  ) { 
    router.events.subscribe((val) => {
      this.urlChange()
    });
  }

  ngOnInit(): void {
  }

  urlChange() {
    this.url = this.router.url


   if ( this.url == '/') {
     this.title = 'Kiddie Korner'
   } else if ( this.url == '/about') {
     this.title = 'About Us'
   } else if ( this.url == '/curriculum') {
     this.title = 'Curriculum'
   }else if ( this.url == '/meals') {
    this.title = 'Nutrition'
  }else if ( this.url == '/schedule') {
    this.title = 'Schedule'
  }else if ( this.url == '/parents') {
    this.title = 'For Parents'
  }else if ( this.url == '/enrollment') {
    this.title = 'Enrollment'
  }else if ( this.url == '/tuition') {
    this.title = 'Tuition'
  }else if ( this.url == '/news') {
    this.title = 'News'
  }else if ( this.url == '/contact-us') {
    this.title = 'Contact Us'
  }   
 };

};

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/app/shared/material.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsComponent } from './news/news.component';
import { OurProgramsComponent } from './our-programs/our-programs.component';
import { CurriculumComponent } from './our-programs/curriculum/curriculum.component';
import { MealsComponent } from './our-programs/meals/meals.component';
import { ScheduleComponent } from './our-programs/schedule/schedule.component';
import { ParentsComponent } from './parents/parents.component';
import { ForParentsComponent } from './parents/for-parents/for-parents.component';
import { EnrollmentComponent } from './parents/enrollment/enrollment.component';
import { TuitionComponent } from './parents/tuition/tuition.component';
import { AlertsComponent } from './alerts/alerts.component';
import { HeaderCardsComponent } from './home/header-cards/header-cards.component';
import { WelcomeMessageComponent } from './home/welcome-message/welcome-message.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { AboutDesktopComponent } from './about/about-desktop/about-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    NewsComponent,
    OurProgramsComponent,
    CurriculumComponent,
    MealsComponent,
    ScheduleComponent,
    ParentsComponent,
    ForParentsComponent,
    EnrollmentComponent,
    TuitionComponent,
    AlertsComponent,
    HeaderCardsComponent,
    WelcomeMessageComponent,
    ToolbarComponent,
    AboutDesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CurriculumComponent } from './our-programs/curriculum/curriculum.component';
import { MealsComponent } from './our-programs/meals/meals.component';
import { ScheduleComponent } from './our-programs/schedule/schedule.component';
import { EnrollmentComponent } from './parents/enrollment/enrollment.component';
import { ForParentsComponent } from './parents/for-parents/for-parents.component';
import { TuitionComponent } from './parents/tuition/tuition.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'meals', component: MealsComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'enrollment', component: EnrollmentComponent},
  {path: 'parents', component: ForParentsComponent},
  {path: 'tuition', component: TuitionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

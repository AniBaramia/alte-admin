import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './About Us/about-us/about-us.component';
import { DocsComponent } from './About Us/docs/docs.component';
import { OurPartnersComponent } from './About Us/our-partners/our-partners.component';
import { StaffComponent } from './About Us/staff/staff.component';
import { ContactComponent } from './contact/contact.component';
import { EditorComponent } from './editor/editor.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AdmissionComponent } from './admission/admission.component';
import { FaqComponent } from './faq/faq.component';
import { StudiesComponent } from './studies/studies.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'our-partners', component: OurPartnersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'admission/:id', component: AdmissionComponent },
  { path: 'freq', component: FaqComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './About Us/about-us/about-us.component';
import { DocsComponent } from './About Us/docs/docs.component';
import { HttpClientModule } from '@angular/common/http';
import { OurPartnersComponent } from './About Us/our-partners/our-partners.component';
import { StaffComponent } from './About Us/staff/staff.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutUsComponent, DocsComponent, OurPartnersComponent, StaffComponent, AdmissionComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

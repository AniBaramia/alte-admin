import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManagingBoardComponent } from './managing-board/managing-board.component';
import { AdminStaffComponent } from './admin-staff/admin-staff.component';
import { DocsComponent } from './docs/docs.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutUsComponent, ManagingBoardComponent, AdminStaffComponent, DocsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

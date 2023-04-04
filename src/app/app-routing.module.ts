import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './About Us/about-us/about-us.component';
import { ManagingBoardComponent } from './About Us/managing-board/managing-board.component';
import { AdminStaffComponent } from './About Us/admin-staff/admin-staff.component';
import { DocsComponent } from './About Us/docs/docs.component';
import { OurPartnersComponent } from './About Us/our-partners/our-partners.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'managing-board', component: ManagingBoardComponent },
  { path: 'admin-staff', component: AdminStaffComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'our-partners', component: OurPartnersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

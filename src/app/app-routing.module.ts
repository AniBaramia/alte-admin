import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManagingBoardComponent } from './managing-board/managing-board.component';
import { AdminStaffComponent } from './admin-staff/admin-staff.component';
import { DocsComponent } from './docs/docs.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'managing-board', component: ManagingBoardComponent },
  { path: 'admin-staff', component: AdminStaffComponent },
  { path: 'docs', component: DocsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

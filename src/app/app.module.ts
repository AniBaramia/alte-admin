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
import { AdmissionsComponent } from './admissions/admissions.component';
import { ContactComponent } from './contact/contact.component';
import { NgxEditorModule } from 'ngx-editor';
import { EditorComponent } from './editor/editor.component';
import { PopupComponent } from './popup/popup.component';
import { ActionButtonsComponent } from './popup/action-buttons/action-buttons.component';
import { AdmissionComponent } from './admission/admission.component';
import { FaqComponent } from './faq/faq.component';
import { StudiesComponent } from './studies/studies.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    DocsComponent,
    OurPartnersComponent,
    StaffComponent,
    AdmissionsComponent,
    ContactComponent,
    EditorComponent,
    PopupComponent,
    ActionButtonsComponent,
    AdmissionComponent,
    FaqComponent,
    StudiesComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

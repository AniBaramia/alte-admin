import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editor, toDoc, toHTML } from 'ngx-editor';
import { Admission, Member } from '../interfaces';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss'],
})
export class AdmissionComponent implements OnInit {
  admissions: Admission[] = [];
  editor!: Editor;
  html?: Record<string, any>;

  admission: Partial<Admission> = {};
  popupVisibility = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.editor = new Editor();

    this.getAdmissions();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  addOnClick() {
    this.admission = {};
    this.html = undefined;
    this.popupVisibility = true;
  }

  cancelOnClick() {
    this.popupVisibility = false;
  }

  createOnClick() {
    this.admission.content = toHTML(this.html!);

    if (this.admission.id == undefined) {
      this.httpClient
        .post('http://localhost:3000/admissions', this.admission)
        .subscribe(() => {
          this.getAdmissions();
          this.popupVisibility = false;
        });
    } else {
      this.httpClient
        .put(
          'http://localhost:3000/admissions/' + this.admission.id,
          this.admission
        )
        .subscribe(() => {
          this.getAdmissions();
          this.popupVisibility = false;
        });
    }
  }

  removeOnClick(id: number) {
    this.httpClient.delete('http://localhost:3000/cms/' + id).subscribe(() => {
      this.getAdmissions();
    });
  }

  editOnClick(id: number) {
    this.httpClient
      .get<Admission>('http://localhost:3000/admissions/' + id)
      .subscribe((response) => {
        this.admission = response;
        this.html = toDoc(response.content);
      });

    this.popupVisibility = true;
  }

  getAdmissions() {
    this.httpClient
      .get<Admission[]>('http://localhost:3000/admissions')
      .subscribe((response) => (this.admissions = response));
  }
}

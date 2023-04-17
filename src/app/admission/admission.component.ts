import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Editor, toDoc, toHTML, Toolbar } from 'ngx-editor';
import { Admission } from '../interfaces';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss'],
})
export class AdmissionComponent implements OnInit, OnDestroy {
  admission!: Partial<Admission>;

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  html?: Record<string, any>;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.editor = new Editor();

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.httpClient
        .get<Admission>('http://localhost:3000/admissions/' + id)
        .subscribe((response) => {
          this.admission = {
            id: response.id,
            title: response.title,
            description: response.description,
          };

          this.html = toDoc(response.content);
        });
    } else {
      this.admission = {};
      this.html = undefined;
    }
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  saveOnClick() {
    this.admission.content = toHTML(this.html!);

    if (this.admission.id == undefined) {
      this.httpClient
        .post('http://localhost:3000/admissions', this.admission)
        .subscribe(() => {
          this.router.navigate(['/admissions']);
        });
    } else {
      this.httpClient
        .put(
          'http://localhost:3000/admissions/' + this.admission.id,
          this.admission
        )
        .subscribe(() => {
          this.router.navigate(['/admissions']);
        });
    }
  }
}

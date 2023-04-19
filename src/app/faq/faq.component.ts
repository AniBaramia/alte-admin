import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FAQ } from '../interfaces';
import { Editor, Toolbar, toDoc, toHTML } from 'ngx-editor';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit, OnDestroy {
  popupVisibility = false;
  faq: FAQ = {};
  questions: FAQ[] = [];
  editor!: Editor ;
  html?: Record<string, any>;
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
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAllQuestions();
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  addOnClick() {
    this.faq = {};
    this.html = {}
    this.popupVisibility = true;
  }

  cancelOnClick() {
    this.popupVisibility = false;
  }

  createOnClick() {
    this.faq.answer = toHTML(this.html!);
    
    if (this.faq.id == undefined) {
      this.httpClient
        .post('http://localhost:3000/faq', this.faq)
        .subscribe(() => {
          this.getAllQuestions();
          this.popupVisibility = false;
        });
    } else {
      this.httpClient
        .put('http://localhost:3000/faq/' + this.faq.id, this.faq)
        .subscribe(() => {
          this.getAllQuestions();
          this.popupVisibility = false;
        });
    }
  }
  getAllQuestions() {
    this.httpClient.get<FAQ[]>('http://localhost:3000/faq').subscribe((response) => {
      this.questions = response;
    });
  }

  removeOnClick(id: number) {
    this.httpClient
      .delete('http://localhost:3000/faq/' + id)
      .subscribe(() => {
        this.getAllQuestions();
      });
  }
  editOnClick(question: FAQ) {
    this.popupVisibility = true;
    this.faq = { ...question };
    this.html = toDoc(question.answer!)
   
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../interfaces';
import { Editor, Toolbar, toDoc, toHTML } from 'ngx-editor';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  popupVisibility = false;
  news: News = {};
  newses: News[] = [];
  editor!: Editor;
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
    this.editor = new Editor();
    this. getAllNews();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  addOnClick() {
    this.news = {};
    this.html = {}
    this.popupVisibility = true;
  }

  cancelOnClick() {
    this.popupVisibility = false;
  }
  createOnClick() {
    this.news.content = toHTML(this.html!);

    if (this.news.id == undefined) {
      this.httpClient
        .post('http://localhost:3000/news', this.news)
        .subscribe(() => {
          this.getAllNews();
          this.popupVisibility = false;
        });
    } else {
      this.httpClient
        .put('http://localhost:3000/news/' + this.news.id, this.news)
        .subscribe(() => {
          this.getAllNews();
          this.popupVisibility = false;
        });
    }
  }

  getAllNews() {
    this.httpClient
      .get<News[]>('http://localhost:3000/news')
      .subscribe((response) => {
        this.newses = response;
      });
  }
  removeOnClick(id: number) {
    this.httpClient
      .delete('http://localhost:3000/news/' + id)
      .subscribe(() => {
        this.getAllNews();
      });
  }
  editOnClick(content: News) {
    this.popupVisibility = true;
    this.news = { ...content };
    this.html = toDoc(this.news.content!)
   
  }
}

import { Component, OnInit } from '@angular/core';
import { Events } from '../interfaces';
import { Editor, Toolbar, toDoc, toHTML } from 'ngx-editor';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  popupVisibility = false;
  event: Events = {};
  events: Events[] = [];
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
    this. getAllEvents();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  addOnClick() {
    this.event = {};
    this.html = {}
    this.popupVisibility = true;
  }

  cancelOnClick() {
    this.popupVisibility = false;
  }
  createOnClick() {
    this.event.content = toHTML(this.html!);

    if (this.event.id == undefined) {
      this.httpClient
        .post('http://localhost:3000/events', this.event)
        .subscribe(() => {
          this.getAllEvents();
          this.popupVisibility = false;
        });
    } else {
      this.httpClient
        .put('http://localhost:3000/events/' + this.event.id, this.event)
        .subscribe(() => {
          this.getAllEvents();
          this.popupVisibility = false;
        });
    }
  }

  getAllEvents() {
    this.httpClient
      .get<Events[]>('http://localhost:3000/events?_sort=date&_order=desc')
      .subscribe((response) => {
        this.events = response;
      });
  }
  removeOnClick(id: number) {
    this.httpClient
      .delete('http://localhost:3000/events/' + id)
      .subscribe(() => {
        this.getAllEvents();
      });
  }
  editOnClick(content: Events) {
    this.popupVisibility = true;
    this.event = { ...content };
    this.html = toDoc(this.event.content!)
   
  }

}

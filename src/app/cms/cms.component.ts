import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editor, toHTML } from 'ngx-editor';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss'],
})
export class CmsComponent implements OnInit {
  editor!: Editor;
  html!: Record<string, any>;
  url!: string;
  cms: any = [];
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.editor = new Editor();
    this.getAllCms();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }
  onSaveClick() {
    this.httpClient
      .post('http://localhost:3000/cms', {
        url: this.url, // input
        content: toHTML(this.html), // editor
      })
      .subscribe(() => {});
  }

  getAllCms() {
    this.httpClient
      .get('http://localhost:3000/cms')
      .subscribe((response) => (this.cms = response));
  }
  removeOnClick(id: number) {
    this.httpClient
      .delete('http://localhost:3000/cms/' + id)
      .subscribe(() => {
        this.getAllCms();
      });
  }

  editOnClick(){
    
  }
 
}

import { Component, OnInit } from '@angular/core';
import { Editor, toHTML } from 'ngx-editor';

@Component({
  selector: 'app-international-students',
  templateUrl: './international-students.component.html',
  styleUrls: ['./international-students.component.scss'],
})
export class InternationalStudentsComponent implements OnInit {
  editor!: Editor;
  html!: Record<string, any>;

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  onSaveClick() {
    const cmsPage = {
      //url: this.url, // input
      //content: toHTML(this.html), // editor
    };
  }
}

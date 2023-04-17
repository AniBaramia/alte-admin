import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editor, toDoc, toHTML } from 'ngx-editor';
import { Admission, Member } from '../interfaces';

@Component({
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss'],
})
export class AdmissionsComponent implements OnInit {
  admissions: Admission[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAdmissions();
  }

  removeOnClick(id: number) {
    this.httpClient.delete('http://localhost:3000/admissions/' + id).subscribe(() => {
      this.getAdmissions();
    });
  }

  getAdmissions() {
    this.httpClient
      .get<Admission[]>('http://localhost:3000/admissions')
      .subscribe((response) => (this.admissions = response));
  }
}

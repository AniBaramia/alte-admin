import { Component, OnInit } from '@angular/core';
import { Program } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss'],
})
export class StudiesComponent implements OnInit {
  popupVisibility = false;
  program: Program = {};
  programs: Program[] = [];
 
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAllPrograms();
  }

  addOnClick() {
    this.program = {}
    this.popupVisibility = true;
  }

  cancelOnClick() {
    this.popupVisibility = false;
  }

  createOnClick(program: Program) {
    if (this.program.id == undefined) {
      this.httpClient
        .post('http://localhost:3000/programs', program)
        .subscribe(() => {
          this.getAllPrograms();
          this.popupVisibility = false;
        });
    } else {
      this.httpClient
        .put('http://localhost:3000/programs/' + program.id, program)
        .subscribe(() => {
          this.getAllPrograms();
          this.popupVisibility = false;
        });
    }
  }

  getAllPrograms() {
    this.httpClient
      .get<Program[]>('http://localhost:3000/programs')
      .subscribe((response) => {
        this.programs = response;
      });
  }
}

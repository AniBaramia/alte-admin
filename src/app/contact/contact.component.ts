import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  users: User[] = [];
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.httpClient
      .get<User[]>('http://localhost:3000/contact')
      .subscribe((response) => {
        this.users = response;
      });
  }
}

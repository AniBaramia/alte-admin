import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managing-board',
  templateUrl: './managing-board.component.html',
  styleUrls: ['./managing-board.component.scss'],
})
export class ManagingBoardComponent implements OnInit {
  member: Member = {
    img: '',
    name: '',
    title: '',
    id: 0
  };
  members: any = [];

  popupVisibility = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAllMembers();
  }

  addOnClick() {
    this.member = {};
    this.popupVisibility = true;
  }

  cancelOnClick() {
    this.popupVisibility = false;
  }

  createOnClick(member: Member) {
    if (this.member.id == undefined) {
      this.httpClient
        .post('http://localhost:3000/board', member)
        .subscribe(() => {
          this.getAllMembers();
          this.popupVisibility = false;
        });
    } else {
      this.httpClient
        .put('http://localhost:3000/board/' + member.id, member)
        .subscribe(() => {
          this.getAllMembers();
          this.popupVisibility = false;
        });
    }
  }

  getAllMembers() {
    this.httpClient.get('http://localhost:3000/board').subscribe((response) => {
      this.members = response;
    });
  }

  removeOnClick(id: number) {
    this.httpClient
      .delete('http://localhost:3000/board/' + id)
      .subscribe(() => {
        this.getAllMembers();
      });
  }
  editOnClick(member: Member) {
    this.popupVisibility = true;
    this.member = { ...member };
  }
}

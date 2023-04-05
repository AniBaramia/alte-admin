import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Member } from '../../interfaces';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
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
        .post('http://localhost:3000/staff', member)
        .subscribe(() => {
          this.getAllMembers();
          this.popupVisibility = false;
        });
    } else {
      this.httpClient
        .put('http://localhost:3000/staff/' + member.id, member)
        .subscribe(() => {
          this.getAllMembers();
          this.popupVisibility = false;
        });
    }
  }

  getAllMembers() {
    this.httpClient.get('http://localhost:3000/staff').subscribe((response) => {
      this.members = response;
    });
  }

  removeOnClick(id: number) {
    this.httpClient
      .delete('http://localhost:3000/staff/' + id)
      .subscribe(() => {
        this.getAllMembers();
      });
  }
  editOnClick(member: Member) {
    this.popupVisibility = true;
    this.member = { ...member };
  }

}

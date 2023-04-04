import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-staff',
  templateUrl: './admin-staff.component.html',
  styleUrls: ['./admin-staff.component.scss'],
})
export class AdminStaffComponent implements OnInit {
  member: Member = {};
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
        .post('http://localhost:3000/adminStaff', member)
        .subscribe(() => {
          this.getAllMembers();
        });
    } else {
      this.httpClient
        .put('http://localhost:3000/adminStaff/' + member.id, member)
        .subscribe(() => {
          this.getAllMembers();
        });
    }
    this.popupVisibility = false;
  }

  getAllMembers() {
    this.httpClient
      .get('http://localhost:3000/adminStaff')
      .subscribe((response) => {
        this.members = response;
      });
  }

  removeOnClick(id: number) {
    this.httpClient
      .delete('http://localhost:3000/adminStaff/' + id)
      .subscribe(() => {
        this.getAllMembers();
      });
  }
  editOnClick(member: Member) {
    this.popupVisibility = true;
    this.member = { ...member };
  }
}

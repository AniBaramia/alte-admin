import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partner } from 'src/app/interfaces';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss'],
})
export class OurPartnersComponent implements OnInit {
  popupVisibility = false;
  partner: Partner = {};
  partners: any = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAllPartners();
  }

  addOnClick() {
    this.partner = {};
    this.popupVisibility = true;
  }
  cancelOnClick() {
    this.popupVisibility = false;
  }
  createOnClick(partner: Partner) {
    if (this.partner.id == undefined) {
      this.httpClient
        .post('http://localhost:3000/partners', partner)
        .subscribe(() => {
          this.getAllPartners();
          this.popupVisibility = false;
        });
    } else {
      this.httpClient
        .put('http://localhost:3000/partners/' + partner.id, partner)
        .subscribe(() => {
          this.getAllPartners();
          this.popupVisibility = false;
        });
    }
  }

  getAllPartners() {
    this.httpClient
      .get('http://localhost:3000/partners')
      .subscribe((response) => {
        this.partners = response;
      });
  }

  removeOnClick(id: number) {
    this.httpClient
      .delete('http://localhost:3000/partners/' + id)
      .subscribe(() => {
        this.getAllPartners();
      });
  }
  editOnClick(partner: Partner) {
    this.popupVisibility = true;
    this.partner = { ...partner };
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss'],
})
export class AdmissionComponent implements OnInit {
  menuItems = [
    {
      title: 'Content management systems(CMS)',
      url: 'cms',
      img: 'https://i.ibb.co/sHzPPyW/1-12.png',
    },
  ];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuItems = [
    {
      title: 'Managing Board',
      url: '/managing-board',
      img: 'https://i.ibb.co/sHzPPyW/1-12.png',
    },
    {
      title: 'Admin Staff',
      url: '/managing-board',
      img: 'https://i.ibb.co/sHzPPyW/1-12.png',
    },
    {
      title: 'Docs',
      url: '/managing-board',
      img: 'https://i.ibb.co/sHzPPyW/1-12.png',
    },
  ]
}

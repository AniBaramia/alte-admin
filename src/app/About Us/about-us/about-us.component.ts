import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  menuItems = [
    {
      title: 'Staff',
      url: '/staff',
      img: 'https://i.ibb.co/sHzPPyW/1-12.png',
    },
    {
      title: 'Docs',
      url: '/docs',
      img: 'https://i.ibb.co/sHzPPyW/1-12.png',
    },
    {
      title: 'Our Partners',
      url: '/our-partners',
      img: 'https://i.ibb.co/sHzPPyW/1-12.png',
    },
  ];
}

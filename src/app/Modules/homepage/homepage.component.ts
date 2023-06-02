import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  slides = [
    { image: '/assets/Homepage/desktop-wallpaper-apple-logo-white-background-apple-3d-logo-3d-art-apple-3d-apple-emblem-creative-art-apple-emblem.jpg' },
    { image: '/assets/Homepage/My project-1 (2).png' },
    { image: '/assets/Homepage/desktop-wallpaper-nice-s-collection-46-of-apple-abstract-great-abstract.jpg' }
  ];

  ngOnInit() {
  }
}

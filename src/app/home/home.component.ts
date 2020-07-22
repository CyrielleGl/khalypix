import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photos = [
    {
      url: '../../assets/visuels/photos/juliette1.jpg'
    },
    {
      url: '../../assets/visuels/photos/claire4.jpg'
    },
    {
      url: '../../assets/visuels/photos/melanie1.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

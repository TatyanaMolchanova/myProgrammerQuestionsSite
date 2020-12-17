import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css-page',
  templateUrl: './css-page.component.html',
  styleUrls: ['./css-page.component.scss']
})
export class CssPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('this.router.url', this.router.url)
  }

}

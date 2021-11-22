import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rubberBandAnimation, fadeInAnimation } from 'angular-animations';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  animations: [
    rubberBandAnimation(),
    fadeInAnimation()
  ]
})
export class ShowcaseComponent implements OnInit {
  
  invertY = false;
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

}

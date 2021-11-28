import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rubberBandAnimation, fadeInAnimation } from 'angular-animations';
import timeline from '@data/timeline.json';
import particlesOptions from '@data/particles.json';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    rubberBandAnimation(),
    fadeInAnimation()
  ]
})
export class TimelineComponent implements OnInit {
  arrowDownOptions: AnimationOptions = {
    path: 'assets/lottie/arrow-down.json',
  };
  id = "tsparticles2";      
  particlesOptions = particlesOptions;
  invertY = false;
  timelineInfo = timeline;
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  moveToHome(){
    this.router.navigate(['/']);
  }

}

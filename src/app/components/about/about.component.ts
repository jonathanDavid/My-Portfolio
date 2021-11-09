import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rubberBandAnimation, fadeInAnimation } from 'angular-animations';
import { AnimationOptions } from 'ngx-lottie';
import * as _ from 'lodash';
import animationsStates from '@data/animationsStates.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    rubberBandAnimation(),
    fadeInAnimation()
  ]
})
export class AboutComponent implements OnInit {

  searchOptions: AnimationOptions = {
    path: 'assets/lottie/developer-technology.json',
  };
  animationsStates = animationsStates;
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  startNameAnimation(name: string){    
    let stateFound = _.find(animationsStates, {element: name});
    if(stateFound){
      stateFound.state = !stateFound.state;
    }    
  }

  getAnimationStateByName(name: string){
    let stateFound = _.find(animationsStates, {element: name});
    if(stateFound){
      return stateFound.state;
    }    
  }

}

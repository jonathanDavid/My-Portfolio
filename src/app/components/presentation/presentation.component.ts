import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextAnimation } from 'ngx-teximate';
import { flipInX, bounceIn } from 'ng-animate';
import { rubberBandAnimation, fadeInAnimation } from 'angular-animations';
import { AnimationOptions } from 'ngx-lottie';
import * as _ from 'lodash';
import animationsStates from '@data/animationsStates.json';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [
    rubberBandAnimation(),
    fadeInAnimation()
  ]
})
export class PresentationComponent implements OnInit {
  
  spaceSuitOptions: AnimationOptions = {
    path: 'assets/lottie/rocket-animation.json',
  };
  animationsStates = animationsStates;

  enterFlipAnimation: TextAnimation = {
    animation: flipInX,
    delay: 200,
    type: 'letter'
  };

  enterFlipSecondAnimation: TextAnimation = {
    animation: flipInX,
    delay: 80,
    type: 'letter'
  };

  enterFlipThirdAnimation_1: TextAnimation = {
    animation: flipInX,
    delay: 30,
    type: 'word'
  };

  enterBounceThirdAnimation: TextAnimation = {
    animation: bounceIn,
    delay: 50,
    type: 'letter'
  };

  showAnimationsOrder = [false, false, false, false];
  showSocial = false;
  showTools = false;
  currentIndex = 0;
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    this.showAnimationsOrder[this.currentIndex]  = true;
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

  showSocialIcons(){
    this.showSocial = true;    
  }

  showToolIcons(){
    this.showTools = true;    
  }

  finish(){
    this.currentIndex++;
    this.showAnimationsOrder[this.currentIndex] = true;
  }

  play(){
    this.currentIndex++;
    this.showAnimationsOrder[this.currentIndex] = true;
  }

}

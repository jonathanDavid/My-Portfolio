import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { rubberBandAnimation, bounceInAnimation } from 'angular-animations';
import { AnimationOptions } from 'ngx-lottie';
import * as _ from 'lodash';
import animationsStates from '@data/animationsStates.json';
import { NgsRevealService } from 'ngx-scrollreveal';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    rubberBandAnimation(),
    bounceInAnimation()
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit, OnDestroy {

  searchOptions: AnimationOptions = {
    path: 'assets/lottie/space.json',
  };
  animationsStates = animationsStates;  
  afterRevealSubscription:any = null;
  showIcons=false;
  constructor(private router: Router, private revealService: NgsRevealService) { 
  }

  ngOnInit(): void {
    this.showIcons = false;
    this.afterRevealSubscription = this.revealService.afterReveal$.subscribe((el: HTMLElement) => {
        if(el.id==="lastText"){
          this.showIcons = true;
        }
    });
  }

  ngOnDestroy() {
    this.afterRevealSubscription.unsubscribe();
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

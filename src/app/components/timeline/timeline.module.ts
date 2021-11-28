import { NgModule } from '@angular/core';
import { NgParticlesModule } from "ng-particles";
import { TimelineComponent } from './timeline.component';
import { CommonModule } from '@angular/common';  
import { NgxSpinnerModule } from "ngx-spinner";
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { LottieModule } from 'ngx-lottie';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MzdTimelineModule } from 'ngx-mzd-timeline';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell as faRegularBell, faSmileBeam, faSmileWink
} from '@fortawesome/free-regular-svg-icons';
import {
  faAsterisk, faBan, faBell as faSolidBell, faBriefcase, faCamera, faCircle, faCloud, faCog,
  faEnvelopeOpen, faHandPointLeft, faMobile, faMoon, faPlay, faSkating, faSkiing, faSkiingNordic,
  faSmileBeam as faSmileBeanSolid, faSmileWink as faSmileWinkSolid, faSnowboarding, faSpinner,
  faSquare, faStar, faSun, faSwimmer, faSync, faUniversity, faGamepad, faSuitcase, faLaptop,  faLink
} from '@fortawesome/free-solid-svg-icons';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'; 

@NgModule({
  declarations: [ TimelineComponent ],
  imports: [ 
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MzdTimelineModule,
    TeximateModule,
    NgxSpinnerModule,
    NgParticlesModule,
    FontAwesomeModule,
    NgsRevealModule,
    LottieModule,
    NgScrollbarModule,
    MatButtonModule,
    ScrollingModule,
    MatIconModule,
    CommonModule,
  ],
  exports: [ TimelineComponent ],
  providers: [  ]
})

export class TimelineModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faSmileWinkSolid, faSmileBeanSolid,
      faSmileWink, faSmileBeam, faEnvelopeOpen, faCloud,
      faMobile, faSquare, faSpinner, faCircle,
      faSync, faPlay, faSun, faMoon, faStar,
      faHandPointLeft, faAsterisk, faCog, faSkating,
      faSkiing, faSkiingNordic, faSnowboarding, faSwimmer,
      faSolidBell, faRegularBell, faCamera, faBan, faBriefcase, 
      faLink, faUniversity, faGamepad, faSuitcase, faLaptop);
  }
}

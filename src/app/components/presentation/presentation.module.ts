import { NgModule } from '@angular/core';
import { NgParticlesModule } from "ng-particles";
import { PresentationComponent } from './presentation.component';
import { CommonModule } from '@angular/common';  
import { NgxSpinnerModule } from "ngx-spinner";
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  declarations: [ PresentationComponent ],
  imports: [ 
    BrowserAnimationsModule,
    TeximateModule,
    NgxSpinnerModule,
    NgParticlesModule,
    NgsRevealModule,
    LottieModule,
    CommonModule
  ],
  exports: [ PresentationComponent ],
  providers: [  ]
})

export class PresentationModule { }

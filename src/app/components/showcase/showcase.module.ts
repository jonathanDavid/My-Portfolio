import { NgModule } from '@angular/core';
import { NgParticlesModule } from "ng-particles";
import { ShowcaseComponent } from './showcase.component';
import { CommonModule } from '@angular/common';  
import { NgxSpinnerModule } from "ngx-spinner";
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { LottieModule } from 'ngx-lottie';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [ ShowcaseComponent ],
  imports: [ 
    BrowserAnimationsModule,
    TeximateModule,
    NgxSpinnerModule,
    NgParticlesModule,
    NgsRevealModule,
    LottieModule,
    NgScrollbarModule,
    ScrollingModule,
    CommonModule
  ],
  exports: [ ShowcaseComponent ],
  providers: [  ]
})

export class ShowcaseModule { }

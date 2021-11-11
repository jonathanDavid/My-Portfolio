import { NgModule } from '@angular/core';
import { NgParticlesModule } from "ng-particles";
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';  
import { NgxSpinnerModule } from "ngx-spinner";
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { LottieModule } from 'ngx-lottie';
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [ AboutComponent ],
  imports: [ 
    BrowserAnimationsModule,
    TeximateModule,
    NgxSpinnerModule,
    SwiperModule,
    NgParticlesModule,
    NgsRevealModule,
    LottieModule,
    CommonModule
  ],
  exports: [ AboutComponent ],
  providers: [  ]
})

export class AboutModule { }

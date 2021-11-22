import { NgModule } from '@angular/core';
import { NgParticlesModule } from "ng-particles";
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';  
import { NgxSpinnerModule } from "ngx-spinner";
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { LottieModule } from 'ngx-lottie';
import { PresentationModule } from '@components/presentation/presentation.module';
import { AboutModule } from '@components/about/about.module';
import { ContactModule } from '@components/contact/contact.module';
import { ShowcaseModule } from '@components/showcase/showcase.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [ WelcomeComponent ],
  imports: [ 
    BrowserAnimationsModule,
    TeximateModule,
    NgxSpinnerModule,
    NgParticlesModule,
    NgsRevealModule,
    PresentationModule,
    ScrollingModule,
    NgScrollbarModule,
    ContactModule,
    ShowcaseModule,
    AboutModule,
    LottieModule,
    CommonModule
  ],
  exports: [ WelcomeComponent ],
  providers: [  ]
})

export class WelcomeModule { }

import { NgModule } from '@angular/core';
import { NgParticlesModule } from "ng-particles";
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';  
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { LottieModule } from 'ngx-lottie';
import { PresentationModule } from '@components/presentation/presentation.module';
import { AboutModule } from '@components/about/about.module';
import { ContactModule } from '@components/contact/contact.module';
import { ShowcaseModule } from '@components/showcase/showcase.module';
@NgModule({
  declarations: [ WelcomeComponent ],
  imports: [ 
    BrowserAnimationsModule,
    TeximateModule,
    NgxSpinnerModule,
    NgParticlesModule,
    PresentationModule,
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

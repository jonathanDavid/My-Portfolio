import { NgModule } from '@angular/core';
import { NgParticlesModule } from "ng-particles";
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';  
import { NgxSpinnerModule } from "ngx-spinner";
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  declarations: [ ContactComponent ],
  imports: [ 
    BrowserAnimationsModule,
    TeximateModule,
    NgxSpinnerModule,
    NgParticlesModule,
    NgsRevealModule,
    LottieModule,
    CommonModule
  ],
  exports: [ ContactComponent ],
  providers: [  ]
})

export class ContactModule { }

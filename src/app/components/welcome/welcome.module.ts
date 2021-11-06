import { NgModule } from '@angular/core';
import { NgParticlesModule } from "ng-particles";
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';  
import { NgxSpinnerModule } from "ngx-spinner";
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';

@NgModule({
  declarations: [ WelcomeComponent ],
  imports: [ 
    BrowserAnimationsModule,
    TeximateModule,
    NgxSpinnerModule,
    NgParticlesModule,
    NgsRevealModule,
    CommonModule
  ],
  exports: [ WelcomeComponent ],
  providers: [  ]
})

export class WelcomeModule { }

import { NgModule } from '@angular/core';
import { NgParticlesModule } from "ng-particles";
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';  
import { NgxSpinnerModule } from "ngx-spinner";
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { LottieModule } from 'ngx-lottie';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ CardComponent ],
  imports: [ 
    BrowserAnimationsModule,
    TeximateModule,
    NgxSpinnerModule,
    NgbModule,
    NgParticlesModule,
    NgsRevealModule,
    LottieModule,
    CommonModule
  ],
  exports: [ CardComponent ],
  providers: [  ]
})

export class CardModule { }

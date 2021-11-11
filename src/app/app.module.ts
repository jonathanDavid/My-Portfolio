import { NgModule } from '@angular/core';
import { NgParticlesModule } from "ng-particles";
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { WelcomeModule } from '@components/welcome/welcome.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ConnectionServiceModule, ConnectionServiceOptions, ConnectionServiceOptionsToken } from 'ngx-connection-service';
import 'hammerjs';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgParticlesModule,
    WelcomeModule,
    MatSidenavModule,
    HttpClientModule,
    NgsRevealModule,
    CommonModule,
    AppRoutingModule,
    ConnectionServiceModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HammerModule,
    LottieModule.forRoot({ player: playerFactory }),
    ToastrModule.forRoot({
      preventDuplicates: true,
      countDuplicates: true,
      resetTimeoutOnDuplicate: true
    }),
  ],
  providers: [ 
    {
      provide: ConnectionServiceOptionsToken,
      useValue: <ConnectionServiceOptions>{
        enableHeartbeat: true,
        heartbeatUrl: '/assets/ping.json',
        requestMethod: 'get',
        heartbeatInterval: 5000
      }
    },
    CurrencyPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

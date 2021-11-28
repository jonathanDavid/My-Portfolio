import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { WelcomeComponent } from '@components/welcome/welcome.component';
import { TimelineComponent } from '@components/timeline/timeline.component';

const routes: Routes = [
  { path: '',  component:  WelcomeComponent },
  { path: 'timeline',  component:  TimelineComponent},
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { WelcomeComponent } from '@components/welcome/welcome.component';

const routes: Routes = [
  { path: '',  component:  WelcomeComponent },
  { path: 'login',  component:  WelcomeComponent },
  { path: 'sign-in',  component:  WelcomeComponent},
  { path: 'forgot-password',  component:  WelcomeComponent},
  { path: 'reset-password',  component:  WelcomeComponent},
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

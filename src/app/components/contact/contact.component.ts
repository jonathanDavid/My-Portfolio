import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rubberBandAnimation, fadeInAnimation } from 'angular-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    rubberBandAnimation(),
    fadeInAnimation()
  ]
})
export class ContactComponent implements OnInit {
  


  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

}

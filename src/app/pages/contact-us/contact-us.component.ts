import { Component, Input, OnInit, } from '@angular/core';

//Declaring resources for about-us component
//No methods, this component just displays HTML information defined in the HTML template

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


import { Component, OnInit } from '@angular/core';

//Declaring resources for about-us component
//No methods, this component just displays HTML information defined in the HTML template

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
 
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

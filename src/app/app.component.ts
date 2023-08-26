import { Component , AfterViewInit } from '@angular/core';
import 'owl.carousel';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{
  title = 'portofolio-angular';

  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: true,
      items: 1
    });
  }
}
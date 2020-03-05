import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bgColor = false;

  @HostListener('scroll', [])
  doSomethingOnInternalScroll() {
    if (window.scrollY >= 475) {
      this.bgColor = true;
    } else {
      this.bgColor = false;
    }
  }


  constructor() { }

}

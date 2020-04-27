import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  @HostListener('window:scroll', ['$event'])
  showUpButton($event) {
    if (window.scrollY >= 614) {
      document.getElementById('button-up').style.display = 'inherit';
    } else {
      document.getElementById('button-up').style.display = 'none';
    }
  }
}

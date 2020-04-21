import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostListener('window:scroll', ['$event'])
  showUpButton($event) {
    if (window.scrollY >= 614) {
      document.getElementById('button-up').style.display = 'inherit';
    } else {
      document.getElementById('button-up').style.display = 'none';
    }
  }
}

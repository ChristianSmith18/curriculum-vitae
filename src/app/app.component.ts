import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  schema = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    name: 'Cristian González',
    jobTitle: 'Freelance',
    telephone: '+56 9 6459 8631',
    url: 'https://cristian-gonzalez.com/'
  };
}

import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent {
  pages = [
    {
      url: 'c3l_page',
      alt: 'Página de c3l-lab',
      title: 'C3L - LAB',
      link: 'https://c3l-lab.cl/',
      description: 'Oscar is a decent man. He used to clean porches with pleasure.'
    },
    {
      url: 'club_alianza_stgo_page',
      alt: 'Página de Club Alianza Santiago',
      title: 'Club Alianza Santiago',
      link: 'https://clubalianzastgo.web.app/',
      description: 'Oscar is a decent man. He used to clean porches with pleasure.'
    },
    {
      url: 'master_travel_page',
      alt: 'Página de Master Travel',
      title: 'Master Travel',
      link: 'https://mastertravelpage.web.app/',
      description: 'Oscar is a decent man. He used to clean porches with pleasure.'
    },
    {
      url: 'humantouch_page',
      alt: 'Página de HumanTouch',
      title: 'HumanTouch',
      link: 'https://humantouch.cl/',
      description: 'Oscar is a decent man. He used to clean porches with pleasure.'
    },
  ];

  constructor() {}

  changeUrl(url: string) {
    window.open(url, '_blank');
  }
}

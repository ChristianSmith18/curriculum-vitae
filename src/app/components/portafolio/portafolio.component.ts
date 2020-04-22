import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent {
  constructor() {}

  changeUrl(url: string) {
    window.open(url, '_blank');
  }
}

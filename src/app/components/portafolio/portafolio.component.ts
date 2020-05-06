import { Component } from '@angular/core';
import * as platform from 'platform';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent {
  imgType = platform.manufacturer === 'Apple' ? 'png' : 'webp';
  constructor() {}

  changeUrl(url: string) {
    window.open(url, '_blank');
  }
}

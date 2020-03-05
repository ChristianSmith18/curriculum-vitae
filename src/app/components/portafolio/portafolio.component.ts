import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent {
  desktop = true;

  constructor() { }

  setButton(bool: boolean) {
    this.desktop = bool;
  }
}

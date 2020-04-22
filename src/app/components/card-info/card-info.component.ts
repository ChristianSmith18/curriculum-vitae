import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent {
  edad = new Date().getFullYear() - 1999;

  constructor() {}
}

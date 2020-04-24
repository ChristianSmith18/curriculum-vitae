import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent {
  edad = new Date().getFullYear() - 1999;

  constructor() {}

  downloadPDF() {
    const url = '../../../assets/pdf/curriculum-vitae.pdf';
    const pdfName = 'cristian_gonzalez_CV';
    FileSaver.saveAs(url, pdfName);
  }
}

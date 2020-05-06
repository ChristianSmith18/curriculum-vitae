import { Component, HostListener, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as FileSaver from 'file-saver';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import * as platform from 'platform';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  bgColor = false;
  lang = 'es';
  imgType = platform.manufacturer === 'Apple' ? 'jpg' : 'webp';

  @HostListener('scroll', [])
  doSomethingOnInternalScroll() {
    if (window.scrollY >= 475) {
      this.bgColor = true;
    } else {
      this.bgColor = false;
    }
  }

  constructor(
    private translate: TranslateService,
    private title: Title,
    @Inject(DOCUMENT) private document: Document
  ) {
    const language = localStorage.getItem('asmh');
    if (language === null || language === undefined) {
      localStorage.setItem('asmh', 'es');
    } else {
      this.lang = language;
    }

    if (this.lang === 'es') {
      this.title.setTitle('Cristian González CV');
      this.document.documentElement.lang = 'es-CL';
    } else {
      this.title.setTitle('Cristian González - Resume!');
      this.document.documentElement.lang = 'en';
    }
    this.translate.setDefaultLang(this.lang);
  }

  setLang() {
    if (this.lang === 'es') {
      this.lang = 'en';
    } else {
      this.lang = 'es';
    }
    localStorage.setItem('asmh', this.lang);
    this.translate.use(this.lang);
  }

  downloadPDF() {
    const url = '../../../assets/pdf/curriculum-vitae.pdf';
    const pdfName = 'cristian_gonzalez_CV';
    FileSaver.saveAs(url, pdfName);
  }
}

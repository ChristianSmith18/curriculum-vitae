import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  lang = 'es';

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
      this.title.setTitle('Página no encontrada!');
      this.document.documentElement.lang = 'es-CL';
    } else {
      this.title.setTitle('Page not found!');
      this.document.documentElement.lang = 'en';
    }
    this.translate.setDefaultLang(this.lang);
  }

  redirectHome() {
    window.location.href = 'https://cristian-gonzalez.com/';
  }
}

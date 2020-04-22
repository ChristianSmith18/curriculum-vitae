import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  bgColor = false;
  lang = 'es';

  @HostListener('scroll', [])
  doSomethingOnInternalScroll() {
    if (window.scrollY >= 475) {
      this.bgColor = true;
    } else {
      this.bgColor = false;
    }
  }

  constructor(private translate: TranslateService) {
    const language = localStorage.getItem('asmh');
    if (language === null || language === undefined) {
      localStorage.setItem('asmh', 'es');
    } else {
      this.lang = language;
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
}

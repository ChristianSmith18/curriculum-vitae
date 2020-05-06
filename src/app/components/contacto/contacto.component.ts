import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ContactService } from 'src/app/services/contact.service';
import * as platform from 'platform';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  mail = '';
  name = '';
  phone = '';
  msg = '';
  imgType = platform.manufacturer === 'Apple' ? 'png' : 'webp';
  loadingSvg = false;
  constructor(private http: ContactService) {}

  sendData() {
    const button = document
      .getElementById('button-submit')
      .innerText.toLowerCase()
      .replace(' ', '');
    if (this.name.length < 3) {
      this.mixin(false, 'Formato de nombre incorrecto!');
      return;
    }

    // tslint:disable-next-line: max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(this.mail).toLowerCase())) {
      this.mixin(false, 'Formato de correo incorrecto!');
      return;
    }

    if (this.phone.length < 7 || this.phone.length > 18) {
      this.mixin(false, 'Formato de teléfono incorrecto!');
      return;
    }

    if (
      (document.getElementById('select') as HTMLSelectElement).value ===
        'Tipo de Consulta' ||
      (document.getElementById('select') as HTMLSelectElement).value ===
        'Type of Consultation'
    ) {
      this.mixin(false, 'Seleccione un tipo de consulta!');
      return;
    }

    if (this.msg.length < 2) {
      this.mixin(false, 'Formato de mensaje incorrecto!');
      return;
    }

    this.loadingSvg = true;
    this.http
      .sendEmail(
        this.mail,
        this.name,
        this.phone,
        (document.getElementById('select') as HTMLSelectElement).value,
        this.msg
      )
      .subscribe((data: any) => {
        if (data.status === 200) {
          this.mixin(true, 'Enviado correctamente!');
        } else {
          this.mixin(false, 'Error al enviar!');
        }
        this.mail = '';
        this.name = '';
        this.phone = '';
        if (button === 'enviar') {
          (document.getElementById('select') as HTMLSelectElement).value =
            'Tipo de Consulta';
        } else {
          (document.getElementById('select') as HTMLSelectElement).value =
            'Type of Consultation';
        }
        this.msg = '';
        this.loadingSvg = false;
      });
  }

  mixin(success: boolean, msg: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    if (success) {
      Toast.fire({
        icon: 'success',
        title: msg,
      });
    } else {
      Toast.fire({
        icon: 'error',
        title: msg,
      });
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendEmail(
    mail: string,
    name: string,
    phone: string,
    type: string,
    msg: string
  ) {
    return this.http.post(
      'https://send-email-c3l-lab.herokuapp.com/send-email-cv',
      { name, mail, phone, type, msg }
    );
  }
}

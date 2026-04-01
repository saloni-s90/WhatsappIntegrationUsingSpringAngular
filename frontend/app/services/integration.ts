import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const APIURL = "http://localhost:9000/sendWhatsappMessage";

@Injectable({
  providedIn: 'root',
})
export class Integration {
  constructor(private http: HttpClient) {}

  onSubmit(request: any){
    return this.http.post(APIURL, request, {responseType : 'text'});
  }
}

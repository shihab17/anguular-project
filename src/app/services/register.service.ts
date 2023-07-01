import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerURL = environment.registernurl;
  constructor(private http: HttpClient) { }
  sendOTP(data: any): Observable<any> {
    const url = `${this.registerURL}`;

    return this.http.post<any>(url, data);
  }
}

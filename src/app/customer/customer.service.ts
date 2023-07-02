import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl = environment.customerurl;
  constructor(private http: HttpClient) { }
  getCustomer(): Observable<any> {
    const url = `${this.customerUrl}`;
    return this.http.get<any>(url);
  }
}

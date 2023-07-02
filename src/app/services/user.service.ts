import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userUrl = environment.userurl;
  constructor(private http: HttpClient) {}
  getUser(): Observable<any> {
    const url = `${this.userUrl}`;
    return this.http.get<any>(url);
  }
}

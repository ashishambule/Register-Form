import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, Subject, Subscription, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient, private router: Router) {}
  register(userinfo): Observable<any> {
    console.log('userinfo', userinfo);

    // const headers = this.headers;
    const body = userinfo;
    return this.http.post<any>(this.apiUrl + '/user/add-user', body);
  }
}

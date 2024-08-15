// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../constants/api_constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = API_CONFIG.baseUrl;

  constructor(private http: HttpClient) { }

  userLogin(loginData: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, loginData);
  }

  // Other service methods...
}

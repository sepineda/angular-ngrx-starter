import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  get(url: string, options?: any): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`, options);
  }

  post(url: string, data: any, options?: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, data, options);
  }

  put(url: string, data: any, options?: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, data, options);
  }

  delete(url: string, options?: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}${url}`, options);
  }
}

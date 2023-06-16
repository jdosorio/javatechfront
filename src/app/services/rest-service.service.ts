import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestServiceService {
  constructor(private http: HttpClient) {}

  private url = 'https://challengejava.onrender.com/api/calculo';

  public postMethod(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
}

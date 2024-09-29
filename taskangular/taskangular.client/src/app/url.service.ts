import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }


  baseUrl = "https://localhost:7110/api"

  GetAllServices(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Services/GetAllServices`)

  }
  GetSubServicesByServiceId(id: number): Observable<any> {
    return this.http.get<any>(`${ this.baseUrl }/Services/GetSubServicesByServiceId/${ id }`)
  }
}

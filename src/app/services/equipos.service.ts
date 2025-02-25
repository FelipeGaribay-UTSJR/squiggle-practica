import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  private apiUrl = 'https://api.squiggle.com.au/?q=teams'; 

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<any> {
    return this.http.get(this.apiUrl); 
  }
}
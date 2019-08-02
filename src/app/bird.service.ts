import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BirdService {
  // private baseUrl = 'http://localhost:8080/birdsongs/birds';
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getBird(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/birds/${id}`);
  }

  createBird(bird: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bird);
  }

  updateBird(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBird(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/birdlist`);
  }

}

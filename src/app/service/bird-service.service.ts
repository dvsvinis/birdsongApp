import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bird } from '../bird';
import { Observable } from 'rxjs';

@Injectable()
export class BirdService {

  private birdsUrl: string;

  constructor(private http: HttpClient) {
    this.birdsUrl = 'http://localhost:8080/birds';
  }

  public findAll(): Observable<Bird[]> {
    return this.http.get<Bird[]>(this.birdsUrl);
  }

  public save(bird: Bird) {
    return this.http.post<Bird>(this.birdsUrl, bird);
  }
}

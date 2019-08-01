import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Bird {
  constructor(
    public id: string,
    public name: string,
    public image: string,
    public song1: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getBirds() {
    console.log('get bird list');
    return this.httpClient.get<Bird[]>('http://localhost:8080/birdlist');
  }

  public deleteBird(bird) {
    return this.httpClient.delete<Bird> ('http://localhost:8080/birds' + '/' + bird.id);
  }

  public createBird(bird) {
    return this.httpClient.post<Bird>('http://localhost:8080/birds', bird);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
birdsUrl: string;

  constructor(private httpClient: HttpClient) {
    this.birdsUrl = environment.apiUrl + 'birds';
  }

  getBirds() {
    console.log('get bird list');
    return this.httpClient.get<Bird[]>(environment.apiUrl + 'birdlist');
  }

  public deleteBird(bird) {
    return this.httpClient.delete<Bird> (this.birdsUrl + '/' + bird.id);
  }

  public createBird(bird) {
    return this.httpClient.post<Bird>(this.birdsUrl, bird);
  }
}

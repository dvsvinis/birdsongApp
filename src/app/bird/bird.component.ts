import { Component, OnInit } from '@angular/core';
import { HttpClientService, Bird } from '../service/http-client.service';


@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {
  birds: Bird[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getBirds().subscribe(
    response => { this.birds = response; }
    );
  }

  deleteBird(bird: Bird): void {
    this.httpClientService.deleteBird(bird)
      .subscribe( data => {
        this.birds = this.birds.filter(u => u !== bird);
      });
  }
}

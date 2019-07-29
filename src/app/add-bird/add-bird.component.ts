import { Component, OnInit } from '@angular/core';
import { HttpClientService, Bird } from '../service/http-client.service';


@Component({
  selector: 'app-add-bird',
  templateUrl: './add-bird.component.html',
  styleUrls: ['./add-bird.component.css']
})
export class AddBirdComponent implements OnInit {

  bird: Bird = new Bird('', '', '', '');

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  createBird(): void {
    this.httpClientService.createBird(this.bird)
        .subscribe( data => {
          alert('Bird created successfully.');
        });
  }

}

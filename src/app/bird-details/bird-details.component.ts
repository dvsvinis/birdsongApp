import { Bird } from '../bird';
import { BirdService } from '../bird.service';
import { BirdListComponent } from '../bird-list/bird-list.component';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bird-details',
  templateUrl: './bird-details.component.html',
  styleUrls: ['./bird-details.component.css']
})
export class BirdDetailsComponent implements OnInit {
  id: number;
  bird: Bird;

  constructor(private route: ActivatedRoute, private router: Router, private birdService: BirdService) { }

  ngOnInit() {
    this.bird = new Bird();

    this.id = this.route.snapshot.params['id'];
    this.birdService.getBird (this.id)
      .subscribe(data => {
        console.log(data);
        this.bird = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['birds']);
  }

}

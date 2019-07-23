import { BirdDetailsComponent } from '../bird-details/bird-details.component';
import { Observable } from 'rxjs';
import { BirdService } from '../bird.service';
import { Bird } from '../bird';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent implements OnInit {
  birds: Observable<Bird[]>;

  constructor(private birdService: BirdService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.birds = this.birdService.getBirdsList();
  }

  deleteBird(id: number) {
    this.birdService.deleteBird(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  birdDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}

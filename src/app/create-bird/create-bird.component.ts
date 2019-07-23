import { BirdService } from '../bird.service';
import { Bird } from '../bird';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bird',
  templateUrl: './create-bird.component.html',
  styleUrls: ['./create-bird.component.css']
})
export class CreateBirdComponent implements OnInit {
  bird: Bird = new Bird();
  submitted = false;

  constructor(private birdService: BirdService,private router: Router) { }

  ngOnInit() {
  }

  newBird(): void {
    this.submitted = false;
    this.bird = new Bird();
  }

  save() {
    this.birdService.createBird(this.bird)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bird = new Bird();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/birds']);
  }

}

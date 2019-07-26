import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bird } from '../bird';
import { BirdService } from '../service/bird-service.service';

@Component({
  selector: 'app-bird-form',
  templateUrl: './bird-form.component.html',
  styleUrls: ['./bird-form.component.css']
})
export class BirdFormComponent{

  bird: Bird;

  constructor(private route: ActivatedRoute, private router: Router, private birdService: BirdService) {
    this.bird = new Bird();
  }

  onSubmit() {
    this.birdService.save(this.bird).subscribe(result => this.gotoBirdList());
  }

  gotoBirdList() {
    this.router.navigate(['/birds']);
  }

}

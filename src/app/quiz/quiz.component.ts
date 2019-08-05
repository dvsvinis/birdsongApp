import { Component, OnInit } from '@angular/core';
import { Bird } from '../bird';
import { BirdService } from '../service/bird-service.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  // pageTitle = 'Quiz Bird List';
  birds: Bird[];
  DropList = ['American Robin', 'Gray Catbird', 'Common Grackle', 'Northern Cardinal', 'Black Capped Chickadee'];

  constructor(private birdService: BirdService) { }

  ngOnInit() {
    this.birdService.findAll().subscribe(data => {
      this.birds = data;
    });
  }

  onDrop(event){
    console.log(event);
    moveItemInArray(this.DropList, event.previousIndex, event.currentIndex);
  }

}

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
  listOfBirdNames: string[];

  constructor(private birdService: BirdService) { }

  ngOnInit() {
    this.birdService.findAll().subscribe(data => {
      console.log("data: " + data[0].name);
      this.birds = data;
      this.listOfBirdNames = this.birds.map(bird => {
        return bird.name;
      });
      console.log("birds: " + this.birds[0].name);
    });

  }

  onDrop(event) {
    console.log(event);
    moveItemInArray(this.DropList, event.previousIndex, event.currentIndex);
    this.nameCompare();
  }

  nameCompare() {
    this.DropList.forEach((item, index) => {
      if (item !== this.listOfBirdNames[index]) {
          // raise of flag saying their answer is wrong
          console.log("This not right");
      }
    });
  }

}

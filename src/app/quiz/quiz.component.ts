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
  showAlert: boolean = false;

  constructor(private birdService: BirdService) { }

  ngOnInit() {
    this.birdService.findAll().subscribe(data => {
      this.birds = data;
      this.listOfBirdNames = this.birds.map(bird => {
        return bird.name;
      });
    });

  }

  onDrop(event) {
    console.log(event);
    moveItemInArray(this.DropList, event.previousIndex, event.currentIndex);
    if (this.DropList[event.currentIndex] === this.listOfBirdNames[event.currentIndex]) {
      alert ('Success - this is a match!');
      // this.showAlert = true;
      console.log(this.showAlert);
    } else if (this.DropList[event.currentIndex] !== this.listOfBirdNames[event.currentIndex]){
      alert ('Try again!');
    }
    this.showAlert = false;
  }

  // nameCompare() {
  //   this.DropList.forEach((item, index) => {
  //     if (item !== this.listOfBirdNames[index]) {
  //     // raise of flag saying their answer is wrong
  //       console.log('this not right');
  //      alert('Try again!');
  //     }
  //      else {
  //     alert ('Way to go!');
  //     }
  //   });

  // }


}

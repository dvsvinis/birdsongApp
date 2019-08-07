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
  nameDropList = ['American Robin', 'Gray Catbird', 'Common Grackle', 'Northern Cardinal', 'Black Capped Chickadee'];
  listOfBirdNames: string[];
  listOfBirdImages: string[];
  showAlert: boolean;
  // imageDropList: string[];
  imageDropList = ['https://upload.wikimedia.org/wikipedia/commons/c/c9/Black-capped_Chickadee_%284436797251%29.jpg',
  'https://download.ams.birds.cornell.edu/api/v1/asset/169049481/480',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/American_Robin_Close-Up.JPG/1024px-American_Robin_Close-Up.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/3/34/Gray_Catbird_%2817166164877%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b1/Common_Grackle_%2827182592494%29.jpg'];

  constructor(private birdService: BirdService) { }

  ngOnInit() {
    this.birdService.findAll().subscribe(data => {
      this.birds = data;
      this.listOfBirdNames = this.birds.map(bird => {
        return bird.name;
      });
      this.listOfBirdImages = this.birds.map(bird => {
        return bird.image;
      });
    });

  }

  onNameDrop(event) {
    console.log(event);
    moveItemInArray(this.nameDropList, event.previousIndex, event.currentIndex);
    if (this.nameDropList[event.currentIndex] === this.listOfBirdNames[event.currentIndex]) {
      alert ('Success - this is a match!');
      this.showAlert = true;
      console.log(this.showAlert);
    } else if (this.nameDropList[event.currentIndex] !== this.listOfBirdNames[event.currentIndex]) {
      alert ('Try again!');
    }
  }

  onImageDrop(event) {
    console.log(event);
    moveItemInArray(this.imageDropList, event.previousIndex, event.currentIndex);
    if (this.imageDropList[event.currentIndex] === this.listOfBirdImages[event.currentIndex]) {
      alert ('Success - this is a match!');
      this.showAlert = true;
      console.log(this.showAlert);
    } else if (this.imageDropList[event.currentIndex] !== this.listOfBirdImages[event.currentIndex]) {
      alert ('Try again!');
    }
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

  // 'https://download.ams.birds.cornell.edu/api/v1/asset/169049481/480';
  // ('https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/American_Robin_Close-Up.JPG/1024px-American_Robin_Close-Up.JPG');
  // ('https://upload.wikimedia.org/wikipedia/commons/3/34/Gray_Catbird_%2817166164877%29.jpg');
  // ('https://upload.wikimedia.org/wikipedia/commons/c/c9/Black-capped_Chickadee_%284436797251%29.jpg');
  // ('https://upload.wikimedia.org/wikipedia/commons/b/b1/Common_Grackle_%2827182592494%29.jpg');
}

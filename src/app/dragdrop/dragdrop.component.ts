import { Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent{
Items = [];

  birdimages = [
    'image1',
    'image2',
    'image3'
  ];

  activeList = ['Answers'];

  birdnames = [
    'Cardinal',
    'Chicadee',
    'American Robin'
  ];

  constructor() {
    this.initializeItems();
  }

  ngOnInit() {}

initializeItems() {
  this.Items = [];
  for (let index = 0; index < 100; index++) {
    this.Items.push(index);
  }
}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // drop within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // drop to a different list
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}

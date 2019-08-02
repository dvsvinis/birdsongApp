

import { Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Bird } from '../bird';
import { BirdService } from '../service/bird-service.service';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent{
Items = [];


DropList = ['Bird1', 'Bird2', 'Bird3', 'Bird4', 'Bird5'];

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.Items = [];
    for (let index = 0; index < 11; index++) {
      this.Items.push(index);
    }
  }

  onDrop(event){
    console.log(event);
    moveItemInArray(this.DropList, event.previousIndex, event.currentIndex);
  }

}

import {
  CdkDragDrop,
  moveItemInArray
} from "@angular/cdk/drag-drop";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  list = new Array(20).fill(0).map((_, idx) => idx + 1);
  
  disableDragDrop = false;
  dragStarted = false;
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    this.dragStarted = false;
  }
  onLongPress() {
    console.log("long press");
    this.disableDragDrop = !this.disableDragDrop;
  }

  onDragStart(evt) {
    this.dragStarted = true;
  }

  constructor(){}

  ngOnInit(){}
}

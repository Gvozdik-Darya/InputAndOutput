import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {Flowers} from '../app.component';

@Component({
  selector: 'app-dop',
  templateUrl: './dop.component.html',
  styleUrls: ['./dop.component.css']
})
export class DopComponent {
  constructor() { }
  @Input() myName: string;
  @Input() resultingArray: string[];
  @Input() arrayOfFlowers: Flowers[];
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  @Output() addOrMinus = new EventEmitter<boolean>();
  transferToUp(value){
  this.addOrMinus.emit(value);
  }
  @Output()receiveNumbers = new EventEmitter<any>();
  sendNumbers([value, value1]){
    this.receiveNumbers.emit([value, value1]);
  }
  @Output()receiveObject = new EventEmitter<object>();
  sendObject(obj: object){
    this.receiveObject.emit(obj);
  }
}

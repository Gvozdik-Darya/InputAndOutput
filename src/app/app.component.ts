import { Component,Input } from '@angular/core';
export interface MyObj {
  name: string;
  color: string;
}
export interface Flowers{
  name: string;
  price: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = ['item1', 'item2', 'item3', 'item4'];
  @Input() syn: string;
  title = 'InputAndOutput';
  name = `Daria`;
  num = 5;
  counter = 0;
  firstNumber;
  secondNumber;
  sum;
  public bouquet: Flowers[] = [
    {name: 'rose', price: 10},
    {name: 'lilia', price: 20}
  ];
  clicks = 0;
  changeInParent(increased: boolean){
    increased === true ? this.clicks++ : this.clicks--;
}
  addItem(newItem: string) {
    this.items.push(newItem);
  }
    MinusOrAdd(value){
      if (value == true){
        this.counter++;
      }else{
        this.counter--;
      }
    }
  TwoNumber([value, value1]) {
    this.firstNumber = value;
    this.secondNumber = value1;
  };
  addObject(obj: MyObj){
    console.log(obj);
  }

}

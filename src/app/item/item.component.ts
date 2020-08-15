import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  inputItemInParent: string = '';
  dataFromChiled = '';
  constructor() { }
  log(event: KeyboardEvent): void {
    console.log(event);
  }
  anotherLog(): void {
    console.log('anotherLog');
  }
}

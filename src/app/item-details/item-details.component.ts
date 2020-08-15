import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  // @Input('itemTileInChailed') x: string; //itemTileInChailed is a alias
  @Input() itemTileInChailed: string;
  @Output() eventFromChiled: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  pushEvent(): void {
    this.eventFromChiled.emit('My titel with eventEmitter');
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent {

  constructor() {}

  @Input() createHouse;
  @Output() houseToCreate = new EventEmitter();

  regToHouse() {
    this.houseToCreate.emit(this.createHouse);
  }
}

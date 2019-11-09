import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-show-full-info-house-component',
  templateUrl: './show-full-info-house-component.component.html',
  styleUrls: ['./show-full-info-house-component.component.css']
})
export class ShowFullInfoHouseComponentComponent {
  showedHouseIndex: number;
  showedMinInfo = false;
  cursUSD = 25;

  constructor() { }

@Input() house;

  showFull(id: number) {
    this.showedMinInfo = !this.showedMinInfo;
    this.showedHouseIndex = id;
  }
}

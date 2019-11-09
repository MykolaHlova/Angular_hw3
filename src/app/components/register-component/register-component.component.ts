import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {

  constructor() { }

@Input() createUser;
@Output() userToReg = new EventEmitter();

registerUser() {
  this.userToReg.emit(this.createUser);
}

}

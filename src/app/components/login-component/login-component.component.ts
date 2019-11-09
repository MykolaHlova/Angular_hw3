import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  constructor() { }

@Input() auth;
@Output() userToLog = new EventEmitter;

loginUser() {
  this.userToLog.emit(this.auth);
}
}

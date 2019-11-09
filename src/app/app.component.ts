import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  inputedValue: string;
  searchValue: string;
  isLogClick = false;
  isRegClick = false;
  isHouseClick = false;
  showedHouseIndex: number = 0;
  showedMinInfo = false;

  users = [
    {
      name: 'Bohdan',
      surname: 'Petrov',
      email: 'adas@asas.com',
      password: '1111',
      isBlocked: true
    },
    {
      name: 'Petro',
      surname: 'Mysyk',
      email: 'adas@asas.com',
      password: '3333',
      isBlocked: true
    },
    {
      name: 'Ivan',
      surname: 'Bula',
      email: 'iv@bula.com',
      password: '2222',
      isBlocked: true
    },
    {
      name: 'Tania',
      surname: 'Panas',
      email: 'panas@email.com',
      password: '4444',
      isBlocked: true
    },
  ];

  houses = [
    {
      id: 1,
      city: 'Lviv',
      street: 'S.Bandery',
      price: 50000,
      owner: this.users[0]
    },
    {
      id: 2,
      city: 'Kyiv',
      street: 'I.Franko',
      price: 100000,
      owner: this.users[1]
    },
    {
      id: 3,
      city: 'Kovel',
      street: 'M.Verbyckoho',
      price: 40000,
      owner: this.users[2]
    },
    {
      id: 4,
      city: 'Dnipro',
      street: 'L.Ukrainky',
      price: 30000,
      owner: this.users[3]
    },
  ];

  createUser = {
    name: '',
    surname: '',
    email: '',
    password: '',
    isBlocked: Boolean(Math.floor(Math.random() * 2))
  };

  auth = {
    email: '',
    password: ''
  };

  createHouse = {
    id: this.houses.length + 1,
    city: '',
    street: '',
    price: 0,
    owner: this.users[Math.floor(Math.random() * this.users.length)]
  };

  onInput(ev) {
    this.inputedValue = ev.target.value;
  }

  value() {
    this.searchValue = this.inputedValue;
  }

  register() {
    this.isRegClick = !this.isRegClick;
    this.isLogClick = false;
    this.isHouseClick = false;
  }

  login() {
    this.isLogClick = !this.isLogClick;
    this.isRegClick = false;
    this.isHouseClick = false;
  }

  addHouse() {
    this.isHouseClick = !this.isHouseClick;
    this.isLogClick = false;
    this.isRegClick = false;
  }

  registerUser($event: any) {
    this.users.push(this.createUser);
    console.log(this.createUser);
  }

  loginUser($event: any) {
    const findUser = this.users.find(user => this.auth.email === user.email && this.auth.password === user.password);
    findUser ? alert('Welcome') : alert('User is not found');
  }

  regToHouse(house) {
    this.houses.push(house);
    console.log(this.houses);
  }

  showFull(id: number) {
    this.showedMinInfo = !this.showedMinInfo;
    this.showedHouseIndex = id;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }


groupMember: string;
groupMember2: string;
groupMember3: string;
groupMember4: string;


constructor() {
  this.groupMember = 'Nino';
  this.groupMember2 = 'AJ';
  this.groupMember3 = 'Ally';
  this.groupMember4 = 'Jose';
}

showGreeting() {
  const row2 = document.getElementById('greeting');
  row2.innerHTML = 'This project was made by ' + this.groupMember + ',' + ' ' + this.groupMember2 + ',' + ' '
  + this.groupMember3 + ', and' + ' ' + this.groupMember4 + '.';
}

resetGreeting() {
  const row2 = document.getElementById('greeting');
  row2.innerHTML = 'Welcome to "The Noobs Schedule Calendar!';

}
}

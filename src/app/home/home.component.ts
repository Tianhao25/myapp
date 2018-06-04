import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  suggestionCount: number;
  btnText: String = 'Here it is';
  suggestionText: String = 'My first suggestions!';
  // tslint:disable-next-line:member-ordering
  suggs = [];

  constructor() { }

  ngOnInit() {
    this.suggestionCount = this.suggs.length;
  }

  addItem() {
    if (this.suggestionText === '') { return; }

    this.suggs.push(this.suggestionText);
    this.suggestionText = '';
    this.suggestionCount = this.suggs.length;
  }

  gotoCheck() {
  }


}

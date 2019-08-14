import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h2>{{"Hello " + name}} </h2> <button (click)="fireEvent()">send Event</button>',
  
  styleUrls: []
})
export class ChildComponent implements OnInit {
@Input('parentData') public name;
@Output()public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
fireEvent(){
  this.childEvent.emit('Hey Codevolution');
}
}

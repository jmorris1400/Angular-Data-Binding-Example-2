import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
    <h2>Interpolation</h2>
      <h2>{{name}}</h2>
      <!-- Evaluate the expression and display in browser -->
      <h2>{{2+2}}</h2>
      <!-- String concatenation -->
      <h2>{{"Welcome " + name}}</h2>
      <!-- Display the length of the string -->
      <h2>{{name.length}}</h2>
      <!-- We can use built-in methods -->
      <h2>{{name.toUpperCase()}}</h2>
      <!-- We can use custom methods -->
      <h2>{{greetUser()}}</h2>

      <!-- We can use interpolation also, so why we need property binding -->
      <!-- this will work only on string, there should be someother property -->
      <!-- like boolean property we may need to bind to html -->
      <!-- <input id="{{myId}}" type="text" value="John"> -->

      <h2>Property Binding</h2>
      
      <input [disabled]="isDisabled"  type="text" value="John">
      
      <h2>Event Binding</h2>
      <button (click)="onClick()">Greet</button>{{greeting}}
      
      <h2>Two way Binding</h2>
      <input type="text" [(ngModel)]="name">
      {{name}}
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Angular App";
  public myId = "testId";
  public isDisabled = true;

  public greeting = "";
  
  constructor() { }

  ngOnInit() {
  }
  
  greetUser(){
    return "Hello " + this.name;
  }

  onClick(){
    console.log("Button Clicked")
    this.greeting = "Button Clicked"
  }
  
  logMessage(value){
    console.log(value)
  }

}

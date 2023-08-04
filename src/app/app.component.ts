import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumberList:number[]=[];
  EvenNumberList:number[]=[];

 onIntervalFired(number:number)
 {
  //console.log(number);
  if(number%2===0)
  {
    this.EvenNumberList.push(number);
  }
  else{
    this.oddNumberList.push(number);
  }
 }
}

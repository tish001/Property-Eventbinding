import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  // button change in game-control will inform parent component to do the increment
  @Output() intervalHappen = new EventEmitter<number>();
  interval;
  counter = 0;
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalHappen.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }
  onStopGame() {
    clearInterval(this.interval);
  }
}

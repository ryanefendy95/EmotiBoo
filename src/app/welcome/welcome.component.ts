import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Output() notify2: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isWelcome: boolean = true;


  constructor() { }

  public onClick(): void {
    this.isWelcome = false;
    this.notify2.emit(this.isWelcome);
  }

}

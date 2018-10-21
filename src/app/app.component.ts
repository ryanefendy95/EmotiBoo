import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'emotion-radar';
  public emotions: any;
  public isWelcome: boolean = true;

  /**
   * onNotifyClicked
   */
  public onNotifyClicked(emotions) {
    this.emotions = emotions;
  }

  public onNotify2Clicked(isWelcome: boolean) {
    this.isWelcome = isWelcome;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'emotion-radar';
  public emotions: any;

  /**
   * onNotifyClicked
   */
  public onNotifyClicked(emotions) {
    this.emotions = emotions;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'maximl';
  numberOfElements = 9;
  dashBoardList = [];

  constructor() {
    this.configComponent();
  }

  configDashBoardElement(): void {
    this.dashBoardList = [];
    this.configComponent();
  }

  configComponent(): void {
    for (let i = 0; i < this.numberOfElements; i++) {
      this.dashBoardList.push(i);
    }
  }
}

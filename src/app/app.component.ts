import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my calculator';
  inpValue: string = "";

  recieveInputValues(x: string) {
    this.inpValue += x;

  }
  calculate(exp: string) {
    this.inpValue = eval(exp);
  }
  reset() {
    this.inpValue = "";
  }
}

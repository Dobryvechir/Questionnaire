import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'picture-questionary';
  article = 'php';

  setMenu(menu:string): void {
    window.console.log(menu);
  }
}
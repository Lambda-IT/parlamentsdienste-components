import { Component } from '@angular/core';

import { AngularComponent } from '@parlamentsdienste-components/angular';

@Component({
  imports: [AngularComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test';

  runThis(text: string) {
    console.log(` AppComponent output`, text);
  }
}

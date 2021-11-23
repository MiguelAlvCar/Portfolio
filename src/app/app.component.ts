import { Component } from '@angular/core';

@Component({
  selector: 'mac-root',
  templateUrl: './app.component.html',
  host: {class : 'whole-space-overflow'}
})
export class AppComponent {
  title = 'portfolio';
}

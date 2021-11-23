import { Component } from '@angular/core';

@Component({
  selector: 'mac-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css'],
  host: {class : 'whole-space-overflow'}
})
export class MainNavComponent {
  title = 'portfolio';
}

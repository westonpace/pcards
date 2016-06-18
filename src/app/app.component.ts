import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import { PlayingCardComponent } from './playing-card';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PlayingCardComponent],
  providers: [HTTP_PROVIDERS]
})

export class AppComponent {
  title = 'app works!';
}

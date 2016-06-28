import { provideRouter, RouterConfig } from '@angular/router';

import { CardDemoComponent } from './card-demo';
import { DeckDemoComponent } from './deck-demo';

export const routes: RouterConfig = [
  { path: 'card-demo', component: CardDemoComponent },
  { path: 'deck-demo', component: DeckDemoComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
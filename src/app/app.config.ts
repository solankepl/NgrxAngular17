import { ApplicationConfig, isDevMode } from '@angular/core';
//reducers
import { reducers, reducersTickets } from "./store/reducers";

import { PostsEffects } from './store/effects';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

//inside the provideStore give the state and reducers - no need for ngModule
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore({posts: reducers, tickets:reducersTickets}), provideEffects(PostsEffects), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};

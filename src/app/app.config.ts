import { ApplicationConfig, isDevMode } from '@angular/core';

import { TicketReducer } from "./store/ticket.reducers";
import { TicketsEffects } from './store/ticket.effects';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

//reducers










//inside the provideStore give the state and reducers - no need for ngModule
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideRouter(routes), provideClientHydration(), provideStore({tickets:TicketReducer}), provideEffects(TicketsEffects), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};

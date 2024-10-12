import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppState } from "../types/appState.interface";
import { TicketsStateInterface } from "../interfaces/appState.interface";

export const selectFeature = (state: AppState) => state.tickets;

// Lookup the 'set-asset-info' feature state managed by NgRx
const getTicketsState = createFeatureSelector<TicketsStateInterface>(
    'tickets'
  );
  export const getAllTickets = createSelector(
    getTicketsState,
    (state: TicketsStateInterface) => state.allTicketList
  );

  export const getSelectTickets = createSelector(
    getTicketsState,
    (state: TicketsStateInterface) => state.selectTicket
  );
  


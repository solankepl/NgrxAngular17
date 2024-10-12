import { createAction, props } from '@ngrx/store';

import { Ticket } from '../interfaces/ticket.interface';
import { TicketsStateInterface } from '../interfaces/appState.interface';

export enum ticketsActionTypes {
  TICKETS_LIST = '[Tickets] Get list',
  TICKETS_LIST_SUCCESS = '[Tickets] list success',
  TICKETS_LIST_FAIL = '[Tickets] list fail',
  TICKET_SELECTED_BY_USER = '[Tickets] selected by user'
}

export const TicketsList = createAction(
  ticketsActionTypes.TICKETS_LIST
);
export const TicketsListSuccess = createAction(
  ticketsActionTypes.TICKETS_LIST_SUCCESS,
  props<any>()
);
export const TicketsListFail = createAction(
  ticketsActionTypes.TICKETS_LIST_FAIL,
  props<TicketsStateInterface>()
);
export const TicketsSelected = createAction(
  ticketsActionTypes.TICKET_SELECTED_BY_USER,
  props<Ticket>()
);

/*export class TicketsList implements Action {
  readonly type = ticketsActionTypes.TICKETS_LIST;

  constructor(public payload: any) { }
}
export class TicketsListSuccess implements Action {
  readonly type = ticketsActionTypes.TICKETS_LIST_SUCCESS;

  constructor(public payload: any) { }
}
export class TicketsListFail implements Action {
  readonly type = ticketsActionTypes.TICKETS_LIST_FAIL;
  constructor(public payload: any) { }
}
export class TicketsSelected implements Action {
  readonly type = ticketsActionTypes.TICKET_SELECTED_BY_USER;

  constructor(public payload: any) { }
}

export type ticketsAction =
TicketsList
  | TicketsListSuccess
  | TicketsListFail
  | TicketsSelected
  

export const fromTicketsActions = {
  TicketsList,
  TicketsListSuccess,
  TicketsListFail,
  TicketsSelected
};*/

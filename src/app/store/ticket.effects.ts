import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, mergeMap, of } from "rxjs";
import { TicketsList, ticketsActionTypes } from "./ticket.actions";
import {exhaustMap, map, switchMap} from "rxjs/operators";

import { HttpClient } from "@angular/common/http";
import { Ticket } from "../interfaces/ticket.interface";
import { TicketsService } from "../services/tickets.service";

@Injectable()
export class TicketsEffects {
  constructor(
    private actions$: Actions,
    private ticketsService: TicketsService,
    private http: HttpClient
    
  ) {}
  //private ticketsService: TicketsService
    ///actions$ = inject(Actions);
    
    getTickts$ = createEffect(() => {
   const tickets$: Observable<Ticket[]> = of([
          {
            id: '1',
            value: "guest 1"
          }
      ]);

      return this.actions$.pipe(ofType(TicketsList), 
          exhaustMap(() => tickets$
            /*this.ticketsService.getTicketsUser()*/
          .pipe(
            map(tickets => ({ type: ticketsActionTypes.TICKETS_LIST_SUCCESS, allTicketList: tickets })),
            catchError(() => of({ type: ticketsActionTypes.TICKETS_LIST_FAIL}))
          )
        )
      )

      //return tickets$
    })
    
}
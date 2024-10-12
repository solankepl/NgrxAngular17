import {
  TicketsListFail,
  TicketsListSuccess,
  TicketsSelected
} from './ticket.actions';
import { createReducer, on } from "@ngrx/store"

import { Ticket } from './../interfaces/ticket.interface';
import { TicketsStateInterface } from '../interfaces/appState.interface';

/**
   * Interface for the 'set-asset-info' data used in
   *  - UserState, and
   *  - UserReducer
   *
   *  Note: replace if already defined in another module
   */
  
  
  export const initialState: TicketsStateInterface = {
    allTicketList: [],
    selectTicket: null,
    isLoading:false,
    error: null
  };

  export const TicketReducer = createReducer(
    initialState,
    on(TicketsListSuccess, (state, action) => ({...state, isLoading:true, allTicketList: action.allTicketList})),
    on(TicketsListFail, (state, action) => ({...state, error: action.error})),
    on(TicketsSelected, (state, action) => ({...state, selectTicket: action})),
);

  /*export function TicketReducer(
    state: TicketsStateInterface = initialState,
    action: ticketsAction
  ): TicketsStateInterface {
    switch (action.type) {
      case ticketsActionTypes.TICKETS_LIST_SUCCESS: {
        return { ...state, allTicketList: action.payload };
      }
      case ticketsActionTypes.TICKETS_LIST_FAIL: {
        return { ...state, error: action.payload };
      }
      
      case ticketsActionTypes.TICKET_SELECTED_BY_USER: {
        return { ...state, selectTicket: action.payload };
      }
  
      default:
        return state;
    }
  }*/


  

//actions
/*import * as PostsActions from "./ticket.actions";

import { LinkTicketStateInterface, PostsStateInterface } from "../interfaces/postsState.interface"
import { createReducer, on } from "@ngrx/store"

//initial global state
export const initialState: PostsStateInterface = {
    isLoading: false,
    posts: [],
    selectPost:null,
    error: null
}

export const initialTicketsState: LinkTicketStateInterface = {
    isLoading: false,
    tickets: null,
    error: null,
}



//reducers
export const reducers = createReducer(
    initialState,
    on(PostsActions.getPosts, (state) => ({...state, isLoading: true})),
    on(PostsActions.getPostsSuccess, (state, action) => ({...state, isLoading: false, posts: action.posts})),
    on(PostsActions.getPostsFailure, (state, action) => ({...state, isLoading: false, error: action.error})),
    on(PostsActions.addPost, (state, action) => ({...state, isLoading: false, posts: [...state.posts, action.post]})),
    on(PostsActions.selectPost, (state, action) => ({...state, isLoading: false, selectPost: action.selectPost})),
);


//reducers
export const reducersTickets = createReducer(
    initialTicketsState,
    on(PostsActions.getTickets, (state) => ({...state, isLoading: true})),
    on(PostsActions.getTicketsSuccess, (state, action) => ({...state, isLoading: false, tickets: action.tickets})),
    on(PostsActions.getTicketsFailure, (state, action) => ({...state, isLoading: false, error: action.error})),
);*/


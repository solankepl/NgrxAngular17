//actions
import * as PostsActions from "./actions";

import { LinkTicketStateInterface, PostsStateInterface } from "../interfaces/postsState.interface"
import { createReducer, on } from "@ngrx/store"

//initial global state
export const initialState: PostsStateInterface = {
    isLoading: false,
    posts: [],
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

);


//reducers
export const reducersTickets = createReducer(
    initialTicketsState,
    on(PostsActions.getTickets, (state) => ({...state, isLoading: true})),
    on(PostsActions.getTicketsSuccess, (state, action) => ({...state, isLoading: false, tickets: action.tickets})),
    on(PostsActions.getTicketsFailure, (state, action) => ({...state, isLoading: false, error: action.error})),
);


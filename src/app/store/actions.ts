import { createAction, props } from "@ngrx/store";

import { Post } from "../interfaces/Post.interface";

export const getPosts = createAction('[Posts] Get Posts');

export const getPostsSuccess = createAction('[Posts] Get Posts Success', props<{posts: Post[]}>());
export const getPostsFailure = createAction('[Posts] Get Posts Failure', props<{error: string}>());

export const addPost = createAction('[Posts] Create Post', props<{post: Post}>());
export const removePost = createAction('[Posts] Remove Post', props<{id: string}>());

export const selectPost =  createAction('[Posts] Selected Post', props<{selectPost: Post}>());




export const getTickets = createAction('[Tickets] Get Tickets');
export const getTicketsSuccess = createAction('[Tickets] Get Tickets Success', props<{tickets: any}>());
export const getTicketsFailure = createAction('[Tickets] Get Tickets Failure', props<{error: string}>());
import * as PostsActions from "./actions";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, mergeMap, of } from "rxjs";

import { Post } from "../interfaces/Post.interface";
import {map} from "rxjs/operators";

@Injectable()
export class PostsEffects {

    actions$ = inject(Actions);

    getPosts$ = createEffect(() => {
        return this.actions$.pipe(ofType(PostsActions.getPosts), 
        mergeMap(() => {
            //posts$ might represent a call to a service that returns an observable -- similar to a response from an API
            const posts$: Observable<Post[]> = of([
                {
                   id: '1',
                   value: "guest 1"
                }
            ]); //service
            return posts$.pipe(map((posts) => {
                return PostsActions.getPostsSuccess({posts});
            }),
            catchError((error) => of(PostsActions.getPostsFailure({error: error.message})))
            )//endof pipe
        }))
    })

    
    getTickts$ = createEffect(() => {
        return this.actions$.pipe(ofType(PostsActions.getTickets), 
        mergeMap(() => {
            //posts$ might represent a call to a service that returns an observable -- similar to a response from an API
            const tickets$: Observable<any> = of({
                    1:["this is link ticket one"],
                    2:["this is link ticket 2"],
                    3:[]            
                }
            ); 
            //service
            return tickets$.pipe(map((tickets) => {
                return PostsActions.getTicketsSuccess(tickets);
            }),
            catchError((error) => of(PostsActions.getTicketsFailure({error: error.message})))
            )//endof pipe
        }))
    })
}
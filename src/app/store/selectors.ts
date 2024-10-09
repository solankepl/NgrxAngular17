import { AppStateInterface } from "../types/appState.interface";
import { createSelector } from "@ngrx/store";

export const selectFeature = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
    selectFeature, 
    (state) => state.isLoading
);

export const postsSelector = createSelector(
    selectFeature, 
    (state) => state.posts
);

export const errorSelector = createSelector(
    selectFeature, 
    (state) => state.error
);



export const selecTicketsFeature = (state: AppStateInterface) => state.tickets;

export const isLoadingTicketsSelector = createSelector(
    selecTicketsFeature, 
    (state) => state.isLoading
);

export const ticketsSelector = createSelector(
    selecTicketsFeature, 
    (state) => state?.tickets
);

export const errorTicketsSelector = createSelector(
    selecTicketsFeature, 
    (state) => state.error
);
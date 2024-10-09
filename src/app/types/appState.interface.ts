import { LinkTicketStateInterface, PostsStateInterface } from "../interfaces/postsState.interface";

export interface AppStateInterface {
    posts: PostsStateInterface;
    tickets: LinkTicketStateInterface;
}
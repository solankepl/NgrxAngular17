import { Post } from "./Post.interface";

export interface PostsStateInterface {
    isLoading : boolean;
    posts : Post[];
    error : string | null;
}



export interface LinkTicketStateInterface {
    isLoading : boolean;
    tickets : any;
    error : string | null;
}
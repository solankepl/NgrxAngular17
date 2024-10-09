import * as PostsActions from "../../store/actions";

import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { postsSelector, selectPost, ticketsSelector } from '../../store/selectors';

import { AppStateInterface } from '../../types/appState.interface';
import { CommonModule } from '@angular/common';
import { Observable } from "rxjs";
import { Post } from '../../interfaces/Post.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{

  userData:any[] = [];

  private readonly store:Store<AppStateInterface> = inject(Store);


  public postForm = new FormGroup({
    selectUser: new FormControl<any | null>("", {validators:[Validators.required], nonNullable: true})
  });

  public loadLinkTickets = () => {
   
    const ticket: Post = this.postForm.value.selectUser;
     console.log("==============",this.postForm.value.selectUser.id);
     this.store.dispatch(PostsActions.selectPost({selectPost: ticket}));
    //add post to state
    //this.store.dispatch(PostsActions.getLinkTicket(Id));
   
    //reset
    //this.postForm.reset();

  }


  public addPost = () => {
    const _post: Post = this.postForm.value.selectUser;
     console.log("==============",this.postForm.value.selectUser);
    //add post to state
    this.store.dispatch(PostsActions.selectPost({selectPost: _post}));
   
    //reset
    //this.postForm.reset();

  }

  readonly users$: Observable<any> = this.store.select(postsSelector);

  readonly selectOption$: Observable<any> = this.store.select(selectPost);
    //get link tickets list
    linkTicktsData$: Observable<any> = this.store.select(ticketsSelector);
      //return the isloading slice of the state
  //readonly isLoading$: Observable<any> = this.store.select(isLoadingTicketsSelector);
  //error
  //readonly error$: Observable<any> = this.store.select(errorTicketsSelector);

  
  //fetch store data
  public fetchStoreData(){
    //this also triggers the effects
    this.store.dispatch(PostsActions.getPosts());  
  }
  ngOnInit(): void {      
   
    //this.isLoading$.subscribe();
    //this.error$.subscribe();
    this.fetchStoreData();

    this.users$.subscribe((val) =>{
      console.log("userData---",val);
      this.userData = val;
    });
    
    this.selectOption$.subscribe((val) =>{
      console.log("selectOption$---",val);
    });
    this.store.subscribe(state => console.log({ state }));
  }

}

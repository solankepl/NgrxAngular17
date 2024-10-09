import * as PostsActions from "../../store/actions";

import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { AppStateInterface } from '../../types/appState.interface';
import { CommonModule } from '@angular/common';
import { Observable } from "rxjs";
import { Post } from '../../interfaces/Post.interface';
import { ticketsSelector } from '../../store/selectors';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{

  guests =[{
    id:"1",
    value:"Guest 1"
  },
  {
    id:"2",
    value:"Guest 2"
  },
  {
    id:"3",
    value:"Guest 3"
  }

]
  private readonly store:Store<AppStateInterface> = inject(Store);


  public postForm = new FormGroup({
    selectGuest: new FormControl<any | null>("", {validators:[Validators.required], nonNullable: true})
  });

  public loadLinkTickets = () => {
    this.store.dispatch(PostsActions.getTickets());
    const Id= this.postForm.value.selectGuest.id;
     console.log("==============",this.postForm.value.selectGuest.id);
    //add post to state
    //this.store.dispatch(PostsActions.getLinkTicket(Id));
   
    //reset
    //this.postForm.reset();

  }


  public addPost = () => {
    const _post: Post = this.postForm.value.selectGuest;
     console.log("==============",this.postForm.value.selectGuest);
    //add post to state
    this.store.dispatch(PostsActions.addPost({post: _post}));
   
    //reset
    //this.postForm.reset();

  }

    
    //get link tickets list
    linkTicktsData$: Observable<any> = this.store.select(ticketsSelector);
      //return the isloading slice of the state
  //readonly isLoading$: Observable<any> = this.store.select(isLoadingTicketsSelector);
  //error
  //readonly error$: Observable<any> = this.store.select(errorTicketsSelector);
  ngOnInit(): void {      
   
    //this.isLoading$.subscribe();
    //this.error$.subscribe();
    this.linkTicktsData$.subscribe((val) =>{
      console.log("linkTicktsData---",val);
    });
    this.store.subscribe(state => console.log({ state }));
  }

}

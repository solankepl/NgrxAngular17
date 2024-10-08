import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../../interfaces/Post.interface';
import { isLoadingSelector, postsSelector, errorSelector } from '../../store/selectors';
import { AppStateInterface } from '../../types/appState.interface';
import { Store, select } from '@ngrx/store';
import * as PostsActions from "../../store/actions";


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

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


  public addPost = () => {
    //const {title} = this.postForm.value;

    const _post: Post = this.postForm.value.selectGuest;
     console.log("==============",this.postForm.value.selectGuest);
    //add post to state
    this.store.dispatch(PostsActions.addPost({post: _post}));
   
    //reset
    //this.postForm.reset();

  }

}

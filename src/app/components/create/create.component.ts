import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TicketsList, TicketsSelected } from '../../store/ticket.actions';

import { AppState } from '../../types/appState.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Ticket } from "../../interfaces/ticket.interface";
import { getAllTickets } from '../../store/ticket.selectors';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{

  userData:any[] = [];

  private readonly store:Store<AppState> = inject(Store);


  public postForm = new FormGroup({
    selectUser: new FormControl<any | null>("", {validators:[Validators.required], nonNullable: true})
  });

  public loadLinkTickets = () => {
    const ticket: Ticket = this.postForm.value.selectUser;
     console.log("==============",this.postForm.value.selectUser.id);
     this.store.dispatch(TicketsSelected(ticket));
  }


  public addPost = () => {
    const _post: Ticket = this.postForm.value.selectUser;
    //this.store.dispatch(PostsActions.selectPost({selectPost: _post}));
  }

  readonly users$: Observable<any> = this.store.select(getAllTickets);

  //readonly selectOption$: Observable<any> = this.store.select(selectPost);
   // linkTicktsData$: Observable<any> = this.store.select(ticketsSelector);
  //fetch store data
  public fetchTicketsData(){
    //this also triggers the effects
    this.store.dispatch(TicketsList());  
  }
  ngOnInit(): void {  
    this.fetchTicketsData();
    this.users$.subscribe((val) =>{
      console.log("userData---",val);
      this.userData = val;
    });
    /*
    this.selectOption$.subscribe((val) =>{
      console.log("selectOption$---",val);
    });*/
    this.store.subscribe(state => console.log({ state }));
  }

}

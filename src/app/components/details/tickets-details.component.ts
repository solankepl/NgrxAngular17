import { Component, OnInit, inject } from '@angular/core';

import { AppState } from '../../types/appState.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';

//store



@Component({
  selector: 'app-tickets-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './tickets-details.component.html',
  styleUrl: './tickets-details.component.css'
})
export class TicketsDetailsComponent implements OnInit {

  private readonly store:Store<AppState> = inject(Store);
  //return the isloading slice of the state
  //readonly isLoading$: Observable<any> = this.store.select(isLoadingSelector);
  //posts
  //readonly tickets$: Observable<any> = this.store.select(ticketsSelector);
  //error
  //readonly error$: Observable<any> = this.store.select(errorSelector);

  //fetch store data
  public fetchStoreData(){
    //this also triggers the effects
    //this.store.dispatch(TicketsActions.getTickets());  
  }
  
  ngOnInit(): void {
    this.fetchStoreData();
  }

}

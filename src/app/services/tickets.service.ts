import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  _url = 'https://solankepl.github.io/ticketsapi/db.json';

  constructor(private http: HttpClient) {}

  getTicketsUser(): Observable<any[]> {
    return this.http
      .get<any>(this._url)
  }
}


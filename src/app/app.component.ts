import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateComponent } from './components/create/create.component';
import { RouterOutlet } from '@angular/router';
import { TicketsDetailsComponent } from './components/details/tickets-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TicketsDetailsComponent, CreateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angaulr Ngrx';
}

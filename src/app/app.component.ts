import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateComponent } from './components/create/create.component';
import { PostsComponent } from './components/posts/posts.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PostsComponent, CreateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angaulr Ngrx';
}

import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MemoryLeakComponent} from "./02-memory-leak/memory-leak.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MemoryLeakComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-examples';
}

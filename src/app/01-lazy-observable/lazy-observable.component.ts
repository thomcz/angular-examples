import {Component, OnInit} from '@angular/core';
import {of, tap} from "rxjs";

@Component({
  selector: 'app-lazy-observable',
  standalone: true,
  imports: [],
  template: `
    <p>{{ hello }}</p>
  `,
  styleUrl: './lazy-observable.component.scss'
})
export class LazyObservableComponent implements OnInit {
  hello$ = of('Hello, World!');
  hello = '';

  ngOnInit() {
    // nothing will happen if we don't subscribe
    this.hello$.pipe(tap(value => {
      this.hello = value;
    }))
      .subscribe();
  }
}

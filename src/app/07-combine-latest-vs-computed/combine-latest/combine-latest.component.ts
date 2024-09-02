import {Component} from '@angular/core';
import {BehaviorSubject, combineLatest, map, tap} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template: `
    <h1>Using combineLatest</h1>
    <p>count: {{ count$|async }}</p>
    <p>double: {{ double$|async }}</p>
    <p>triple: {{ triple$|async }}</p>
    <p>{{ message$|async }}</p>
    <button (click)="increment()">Increment</button>`,

  styleUrl: './combine-latest.component.scss'
})
export class CombineLatestComponent {
  count$ = new BehaviorSubject(1000);

  double$ = this.count$.pipe(
    map((count) => count * 2),
    tap(value => console.log('double', value)));
  triple$ = this.count$.pipe(
    map((count) => count * 3),
    tap(value => console.log('triple', value)));

  // will be calculated once, when double$ changes and shortly after again with changed triple$
  combined$ = combineLatest([this.double$, this.triple$]).pipe(
    map(([double, triple]) => double + triple),
    tap(value => console.log('combined', value)),
  );

  over9000$ = this.combined$.pipe(map((combined) => combined > 9000),);

  // each change of the previous observable will trigger this one and print console log
  message$ = this.over9000$.pipe(
    map((over9000) => over9000 ? "It's over 9000!" : "It's under 9000."),
    tap(value => console.log('over900', value)),
  );

  increment() {
    this.count$.next(this.count$.value + 1);
  }


}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subscription, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-flat-subscriptions',
  standalone: true,
  imports: [],
  template: `
    <p>flat-subscriptions works!</p>
  `,
  styleUrl: './flat-subscriptions.component.scss'
})
export class FlatSubscriptionsComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit() {
    const source1 = of(1).pipe(tap(val => console.log(`Source 1: ${val}`)));
    const source2 = of(2).pipe(tap(val => console.log(`Source 2: ${val}`)));
    const source3 = of(3).pipe(tap(val => console.log(`Source 3: ${val}`)));
    const source4 = of(4).pipe(tap(val => console.log(`Source 4: ${val}`)));


    this.subscription = source1.pipe(
      switchMap(() => source2),
      switchMap(() => source3),
      switchMap(() => source4),
    ).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

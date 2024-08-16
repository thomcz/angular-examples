import {Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subscription} from "rxjs";

@Component({
  selector: 'app-nested-subscribtions',
  standalone: true,
  imports: [],
  template: `
    <p>nested-subscribtions works!</p>
  `,
  styleUrl: './nested-subscriptions.component.scss'
})
export class NestedSubscriptionsComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  subscription4!: Subscription;

  ngOnInit() {
    const source1 = of(1);
    const source2 = of(2);
    const source3 = of(3);
    const source4 = of(4);

    this.subscription1 = source1.subscribe(val => {
      console.log(`Source 1: ${val}`);
      this.subscription2 = source2.subscribe(val => {
        console.log(`Source 2: ${val}`);
        this.subscription3 = source3.subscribe(val => {
          console.log(`Source 3: ${val}`);
          this.subscription4 = source4.subscribe(val => {
            console.log(`Source 4: ${val}`);
          });
        });
      });
    });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}

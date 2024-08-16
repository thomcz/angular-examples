import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-memory-leak',
  standalone: true,
  imports: [],
  template: `
    <p>memory-leak works!</p>
  `,
  styleUrl: './memory-leak.component.scss'
})
export class MemoryLeakComponent implements OnInit, OnDestroy {
  counter = 0;
  subscription!: Subscription;

  ngOnInit() {
    const source = interval(1000);
    this.subscription = source.subscribe(val => {
      console.log(this.counter++);
    });
  }

  ngOnDestroy() {
    // Intentionally not unsubscribing to create a memory leak
    // navigate away from this component to see the memory leak
    // counter will keep increasing and if you navigate back to this component
    // it will start another subscription and a second counter will keep increasing

    this.subscription.unsubscribe();
  }
}

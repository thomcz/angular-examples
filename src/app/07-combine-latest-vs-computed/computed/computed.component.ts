import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [],
  template: `
    <h1>Using computed</h1>
    <p>count: {{ count() }}</p>
    <p>double: {{ double() }}</p>
    <p>triple: {{ triple() }}</p>
    <p>{{ message() }}</p>
    <button (click)="increment()">Increment</button>`,
  styleUrl: './computed.component.scss'
})
export class ComputedComponent {
  count = signal(1000);

  double = computed(() => {
    console.log('double', this.count() * 2);
    return this.count() * 2;
  });
  triple = computed(() => {
    console.log('triple', this.count() * 3);
    return this.count() * 3;
  });

  // will only be calculated once, with both current values
  combined = computed(() => {
    console.log('combined', this.double() + this.triple());

    return this.double() + this.triple();
  });

  over9000 = computed(() => {
    console.log('over900', this.combined() > 9000);
    return this.combined() > 9000;
  });

  // message will only trigger if over9000 changes from false to true or vice versa
  message = computed(() => {
      let message = this.over9000() ? "It's over 9000!" : "It's under 9000.";
      console.log('message', message);
      return message;
    }
  );

  increment() {
    this.count.update((value) => value + 1);
  }
}

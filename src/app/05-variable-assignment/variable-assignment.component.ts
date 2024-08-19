import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-variable-assignment',
  standalone: true,
  imports: [],
  template: `<p>{{ variable }}</p>`,
  styleUrl: './variable-assignment.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariableAssignmentComponent implements OnInit, OnDestroy {
  variable!: number;
  subscription!: Subscription;

  // constructor(private cd: ChangeDetectorRef) {
  //
  // }


  ngOnInit() {
    const source = interval(1000);

    this.subscription = source.subscribe(val => {
      this.variable = val;
      // this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template: `<p>{{ variable$|async }}</p>`,
  styleUrl: './async-pipe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPipeComponent implements OnInit {
  variable$!: Observable<number>;

  ngOnInit() {
    this.variable$ = interval(1000);
  }
}

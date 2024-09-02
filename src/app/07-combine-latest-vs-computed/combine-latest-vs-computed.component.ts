import {Component} from '@angular/core';
import {CombineLatestComponent} from "./combine-latest/combine-latest.component";
import {ComputedComponent} from "./computed/computed.component";

@Component({
  selector: 'app-combine-latest-vs-computed',
  standalone: true,
  imports: [
    CombineLatestComponent,
    ComputedComponent
  ],
  template: `
    <app-combine-latest></app-combine-latest>
    <app-computed></app-computed>`,
  styleUrl: './combine-latest-vs-computed.component.scss'
})
export class CombineLatestVsComputedComponent {

}

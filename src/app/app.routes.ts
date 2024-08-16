import {Routes} from '@angular/router';
import {MemoryLeakComponent} from "./02-memory-leak/memory-leak.component";
import {HelloWorldComponent} from "./00-hello-world/hello-world.component";
import {LazyObservableComponent} from "./01-lazy-observable/lazy-observable.component";
import {NestedSubscriptionsComponent} from "./03-nested-subscriptions/nested-subscriptions.component";
import {FlatSubscriptionsComponent} from "./04-flat-subscriptions/flat-subscriptions.component";
import {VariableAssignmentComponent} from "./05-variable-assignment/variable-assignment.component";
import {AsyncPipeComponent} from "./06-async-pipe/async-pipe.component";

export const routes: Routes = [
  {path: 'hello', component: HelloWorldComponent},
  {path: 'lazy', component: LazyObservableComponent},
  {path: 'memory', component: MemoryLeakComponent},
  {path: 'nested', component: NestedSubscriptionsComponent},
  {path: 'flat', component: FlatSubscriptionsComponent},
  {path: 'variable', component: VariableAssignmentComponent},
  {path: 'asyncPipe', component: AsyncPipeComponent},
  {path: '', redirectTo: '/hello', pathMatch: 'full'} // Default route
];

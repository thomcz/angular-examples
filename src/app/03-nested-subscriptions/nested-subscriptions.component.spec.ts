import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NestedSubscriptionsComponent} from './nested-subscriptions.component';

describe('NestedSubscribtionsComponent', () => {
  let component: NestedSubscriptionsComponent;
  let fixture: ComponentFixture<NestedSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedSubscriptionsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NestedSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

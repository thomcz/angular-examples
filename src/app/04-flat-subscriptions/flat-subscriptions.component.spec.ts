import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatSubscriptionsComponent } from './flat-subscriptions.component';

describe('FlatSubscriptionsComponent', () => {
  let component: FlatSubscriptionsComponent;
  let fixture: ComponentFixture<FlatSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlatSubscriptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyObservableComponent } from './lazy-observable.component';

describe('LazyObservableComponent', () => {
  let component: LazyObservableComponent;
  let fixture: ComponentFixture<LazyObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

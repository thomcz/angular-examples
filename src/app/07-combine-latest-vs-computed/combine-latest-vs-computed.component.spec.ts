import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestVsComputedComponent } from './combine-latest-vs-computed.component';

describe('CombineLatestVsComputedComponent', () => {
  let component: CombineLatestVsComputedComponent;
  let fixture: ComponentFixture<CombineLatestVsComputedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestVsComputedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestVsComputedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

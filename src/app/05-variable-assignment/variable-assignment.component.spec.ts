import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableAssignmentComponent } from './variable-assignment.component';

describe('VariableAssignmentComponent', () => {
  let component: VariableAssignmentComponent;
  let fixture: ComponentFixture<VariableAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariableAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

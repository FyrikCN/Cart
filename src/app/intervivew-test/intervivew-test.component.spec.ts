import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervivewTestComponent } from './intervivew-test.component';

describe('IntervivewTestComponent', () => {
  let component: IntervivewTestComponent;
  let fixture: ComponentFixture<IntervivewTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervivewTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervivewTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

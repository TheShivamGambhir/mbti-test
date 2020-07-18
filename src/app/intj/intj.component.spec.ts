import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntjComponent } from './intj.component';

describe('IntjComponent', () => {
  let component: IntjComponent;
  let fixture: ComponentFixture<IntjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

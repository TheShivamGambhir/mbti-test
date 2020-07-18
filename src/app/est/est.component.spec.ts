import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstComponent } from './est.component';

describe('EstComponent', () => {
  let component: EstComponent;
  let fixture: ComponentFixture<EstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

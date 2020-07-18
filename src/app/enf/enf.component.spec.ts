import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfComponent } from './enf.component';

describe('EnfComponent', () => {
  let component: EnfComponent;
  let fixture: ComponentFixture<EnfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

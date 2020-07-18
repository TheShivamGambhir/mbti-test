import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfpComponent } from './enfp.component';

describe('EnfpComponent', () => {
  let component: EnfpComponent;
  let fixture: ComponentFixture<EnfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

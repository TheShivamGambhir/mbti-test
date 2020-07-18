import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsfpComponent } from './esfp.component';

describe('EsfpComponent', () => {
  let component: EsfpComponent;
  let fixture: ComponentFixture<EsfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

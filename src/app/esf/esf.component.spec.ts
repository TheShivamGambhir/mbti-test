import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsfComponent } from './esf.component';

describe('EsfComponent', () => {
  let component: EsfComponent;
  let fixture: ComponentFixture<EsfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfpComponent } from './infp.component';

describe('InfpComponent', () => {
  let component: InfpComponent;
  let fixture: ComponentFixture<InfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

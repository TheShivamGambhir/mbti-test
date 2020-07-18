import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstpComponent } from './estp.component';

describe('EstpComponent', () => {
  let component: EstpComponent;
  let fixture: ComponentFixture<EstpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstjComponent } from './estj.component';

describe('EstjComponent', () => {
  let component: EstjComponent;
  let fixture: ComponentFixture<EstjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

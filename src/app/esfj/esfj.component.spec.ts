import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsfjComponent } from './esfj.component';

describe('EsfjComponent', () => {
  let component: EsfjComponent;
  let fixture: ComponentFixture<EsfjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsfjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsfjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

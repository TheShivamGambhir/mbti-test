import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfComponent } from './isf.component';

describe('IsfComponent', () => {
  let component: IsfComponent;
  let fixture: ComponentFixture<IsfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

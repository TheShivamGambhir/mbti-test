import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstpComponent } from './istp.component';

describe('IstpComponent', () => {
  let component: IstpComponent;
  let fixture: ComponentFixture<IstpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

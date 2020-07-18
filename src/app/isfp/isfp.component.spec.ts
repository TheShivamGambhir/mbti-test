import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfpComponent } from './isfp.component';

describe('IsfpComponent', () => {
  let component: IsfpComponent;
  let fixture: ComponentFixture<IsfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstjComponent } from './istj.component';

describe('IstjComponent', () => {
  let component: IstjComponent;
  let fixture: ComponentFixture<IstjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

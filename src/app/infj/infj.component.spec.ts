import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfjComponent } from './infj.component';

describe('InfjComponent', () => {
  let component: InfjComponent;
  let fixture: ComponentFixture<InfjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntpComponent } from './entp.component';

describe('EntpComponent', () => {
  let component: EntpComponent;
  let fixture: ComponentFixture<EntpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

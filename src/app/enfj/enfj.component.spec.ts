import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfjComponent } from './enfj.component';

describe('EnfjComponent', () => {
  let component: EnfjComponent;
  let fixture: ComponentFixture<EnfjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

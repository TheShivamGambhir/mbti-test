import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfjComponent } from './isfj.component';

describe('IsfjComponent', () => {
  let component: IsfjComponent;
  let fixture: ComponentFixture<IsfjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsfjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

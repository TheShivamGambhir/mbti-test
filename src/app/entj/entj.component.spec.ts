import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntjComponent } from './entj.component';

describe('EntjComponent', () => {
  let component: EntjComponent;
  let fixture: ComponentFixture<EntjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

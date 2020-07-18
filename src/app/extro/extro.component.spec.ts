import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtroComponent } from './extro.component';

describe('ExtroComponent', () => {
  let component: ExtroComponent;
  let fixture: ComponentFixture<ExtroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

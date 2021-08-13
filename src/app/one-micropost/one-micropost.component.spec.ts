import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMicropostComponent } from './one-micropost.component';

describe('OneMicropostComponent', () => {
  let component: OneMicropostComponent;
  let fixture: ComponentFixture<OneMicropostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneMicropostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMicropostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicropostViewComponent } from './micropost-view.component';

describe('MicropostViewComponent', () => {
  let component: MicropostViewComponent;
  let fixture: ComponentFixture<MicropostViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicropostViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicropostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

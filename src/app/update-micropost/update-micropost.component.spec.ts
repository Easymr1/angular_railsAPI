import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMicropostComponent } from './update-micropost.component';

describe('UpdateMicropostComponent', () => {
  let component: UpdateMicropostComponent;
  let fixture: ComponentFixture<UpdateMicropostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMicropostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMicropostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

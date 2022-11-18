import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallComComponent } from './call-com.component';

describe('CallComComponent', () => {
  let component: CallComComponent;
  let fixture: ComponentFixture<CallComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

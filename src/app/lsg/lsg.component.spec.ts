import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsgComponent } from './lsg.component';

describe('LsgComponent', () => {
  let component: LsgComponent;
  let fixture: ComponentFixture<LsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

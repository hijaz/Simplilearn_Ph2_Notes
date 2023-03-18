import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleChildDemoComponent } from './lifecycle-demo.component';

describe('LifecycleChildDemoComponent', () => {
  let component: LifecycleChildDemoComponent;
  let fixture: ComponentFixture<LifecycleChildDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifecycleChildDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LifecycleChildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

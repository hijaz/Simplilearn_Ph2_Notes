import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLifecycleChildDemoComponent } from './parent-lifecycle-demo.component';

describe('ParentLifecycleChildDemoComponent', () => {
  let component: ParentLifecycleChildDemoComponent;
  let fixture: ComponentFixture<ParentLifecycleChildDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentLifecycleChildDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentLifecycleChildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

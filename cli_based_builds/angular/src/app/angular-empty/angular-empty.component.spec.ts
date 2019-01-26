import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEmptyComponent } from './angular-empty.component';

describe('AngularEmptyComponent', () => {
  let component: AngularEmptyComponent;
  let fixture: ComponentFixture<AngularEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

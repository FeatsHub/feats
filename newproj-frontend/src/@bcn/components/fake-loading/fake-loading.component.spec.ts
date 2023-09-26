import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLoadingComponent } from './fake-loading.component';

describe('FakeLoadingComponent', () => {
  let component: FakeLoadingComponent;
  let fixture: ComponentFixture<FakeLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

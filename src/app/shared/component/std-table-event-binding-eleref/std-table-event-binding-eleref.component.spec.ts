import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTableEventBindingElerefComponent } from './std-table-event-binding-eleref.component';

describe('StdTableEventBindingElerefComponent', () => {
  let component: StdTableEventBindingElerefComponent;
  let fixture: ComponentFixture<StdTableEventBindingElerefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTableEventBindingElerefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTableEventBindingElerefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

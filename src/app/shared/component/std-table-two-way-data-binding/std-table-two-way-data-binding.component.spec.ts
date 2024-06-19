import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTableTwoWayDataBindingComponent } from './std-table-two-way-data-binding.component';

describe('StdTableTwoWayDataBindingComponent', () => {
  let component: StdTableTwoWayDataBindingComponent;
  let fixture: ComponentFixture<StdTableTwoWayDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTableTwoWayDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTableTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

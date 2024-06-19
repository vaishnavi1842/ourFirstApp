import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTabMachineTestComponent } from './std-tab-machine-test.component';

describe('StdTabMachineTestComponent', () => {
  let component: StdTabMachineTestComponent;
  let fixture: ComponentFixture<StdTabMachineTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTabMachineTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTabMachineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

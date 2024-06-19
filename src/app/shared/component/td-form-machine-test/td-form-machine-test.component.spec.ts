import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdFormMachineTestComponent } from './td-form-machine-test.component';

describe('TdFormMachineTestComponent', () => {
  let component: TdFormMachineTestComponent;
  let fixture: ComponentFixture<TdFormMachineTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdFormMachineTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdFormMachineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTabComponent } from './ng-for-tab.component';

describe('NgForTabComponent', () => {
  let component: NgForTabComponent;
  let fixture: ComponentFixture<NgForTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

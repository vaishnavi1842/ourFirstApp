import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TucCardsComponent } from './tuc-cards.component';

describe('TucCardsComponent', () => {
  let component: TucCardsComponent;
  let fixture: ComponentFixture<TucCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TucCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TucCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

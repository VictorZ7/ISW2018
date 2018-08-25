import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegueroComponent } from './Bodeguero.component';

describe('BodegueroComponent', () => {
  let component: BodegueroComponent;
  let fixture: ComponentFixture<BodegueroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegueroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

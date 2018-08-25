import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoBodegaComponent } from './EncargadoBodega.component';

describe('EncargadoBodegaComponent', () => {
  let component: EncargadoBodegaComponent;
  let fixture: ComponentFixture<EncargadoBodegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncargadoBodegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadoBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

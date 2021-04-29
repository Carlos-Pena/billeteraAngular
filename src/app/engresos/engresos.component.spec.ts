import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngresosComponent } from './engresos.component';

describe('EngresosComponent', () => {
  let component: EngresosComponent;
  let fixture: ComponentFixture<EngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngresosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

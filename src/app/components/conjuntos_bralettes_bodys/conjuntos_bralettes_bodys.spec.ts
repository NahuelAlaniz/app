import { ComponentFixture, TestBed } from '@angular/core/testing';

import { conjuntos_bralettes_bodys } from './conjuntos_bralettes_bodys';

describe('conjuntos_bralettes_bodys', () => {
  let component: conjuntos_bralettes_bodys;
  let fixture: ComponentFixture<conjuntos_bralettes_bodys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [conjuntos_bralettes_bodys]
    })
      .compileComponents();

    fixture = TestBed.createComponent(conjuntos_bralettes_bodys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

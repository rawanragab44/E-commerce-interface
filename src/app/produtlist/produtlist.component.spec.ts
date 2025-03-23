import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutlistComponent } from './produtlist.component';

describe('ProdutlistComponent', () => {
  let component: ProdutlistComponent;
  let fixture: ComponentFixture<ProdutlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

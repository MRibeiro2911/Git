import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginahomeComponent } from './paginahome.component';

describe('PaginahomeComponent', () => {
  let component: PaginahomeComponent;
  let fixture: ComponentFixture<PaginahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginahomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

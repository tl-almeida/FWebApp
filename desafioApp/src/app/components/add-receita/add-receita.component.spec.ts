import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceitaComponent } from './add-receita.component';

describe('AddReceitaComponent', () => {
  let component: AddReceitaComponent;
  let fixture: ComponentFixture<AddReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

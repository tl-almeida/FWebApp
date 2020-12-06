import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaDetailsComponent } from './receita-details.component';

describe('ReceitaDetailsComponent', () => {
  let component: ReceitaDetailsComponent;
  let fixture: ComponentFixture<ReceitaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

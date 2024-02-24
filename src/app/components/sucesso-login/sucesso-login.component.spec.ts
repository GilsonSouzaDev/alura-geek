import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoLoginComponent } from './sucesso-login.component';

describe('SucessoLoginComponent', () => {
  let component: SucessoLoginComponent;
  let fixture: ComponentFixture<SucessoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

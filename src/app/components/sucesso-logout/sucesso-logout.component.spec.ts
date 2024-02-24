import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoLogoutComponent } from './sucesso-logout.component';

describe('SucessoLogoutComponent', () => {
  let component: SucessoLogoutComponent;
  let fixture: ComponentFixture<SucessoLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessoLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessoLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

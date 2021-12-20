import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePopUpComponent } from './cliente-pop-up.component';

describe('ClientePopUpComponent', () => {
  let component: ClientePopUpComponent;
  let fixture: ComponentFixture<ClientePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

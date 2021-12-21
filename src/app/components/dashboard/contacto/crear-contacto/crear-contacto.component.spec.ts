import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearContactoComponent } from './crear-contacto.component';

describe('CrearContactoComponent', () => {
  let component: CrearContactoComponent;
  let fixture: ComponentFixture<CrearContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

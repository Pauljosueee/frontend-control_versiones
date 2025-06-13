import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstitucionesComponent } from './instituciones.component';

describe('InstitucionesComponent', () => {
  let component: InstitucionesComponent;
  let fixture: ComponentFixture<InstitucionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InstitucionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

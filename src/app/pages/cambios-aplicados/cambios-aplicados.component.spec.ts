import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CambiosAplicadosComponent } from './cambios-aplicados.component';

describe('CambiosAplicadosComponent', () => {
  let component: CambiosAplicadosComponent;
  let fixture: ComponentFixture<CambiosAplicadosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CambiosAplicadosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CambiosAplicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

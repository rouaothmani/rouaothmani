import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertficatsComponent } from './certficats.component';

describe('CertficatsComponent', () => {
  let component: CertficatsComponent;
  let fixture: ComponentFixture<CertficatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertficatsComponent]
    });
    fixture = TestBed.createComponent(CertficatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

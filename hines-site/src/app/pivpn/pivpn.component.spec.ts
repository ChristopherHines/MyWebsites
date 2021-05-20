import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivpnComponent } from './pivpn.component';

describe('PivpnComponent', () => {
  let component: PivpnComponent;
  let fixture: ComponentFixture<PivpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

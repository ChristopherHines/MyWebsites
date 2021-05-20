import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiholeComponent } from './pihole.component';

describe('PiholeComponent', () => {
  let component: PiholeComponent;
  let fixture: ComponentFixture<PiholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

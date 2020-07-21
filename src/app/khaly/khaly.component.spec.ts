import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhalyComponent } from './khaly.component';

describe('KhalyComponent', () => {
  let component: KhalyComponent;
  let fixture: ComponentFixture<KhalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

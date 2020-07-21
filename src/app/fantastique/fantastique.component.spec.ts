import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantastiqueComponent } from './fantastique.component';

describe('FantastiqueComponent', () => {
  let component: FantastiqueComponent;
  let fixture: ComponentFixture<FantastiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantastiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantastiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivElementComponent } from './div-element.component';

describe('DivElementComponent', () => {
  let component: DivElementComponent;
  let fixture: ComponentFixture<DivElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

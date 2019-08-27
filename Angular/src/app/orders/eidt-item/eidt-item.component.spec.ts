import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtItemComponent } from './eidt-item.component';

describe('EidtItemComponent', () => {
  let component: EidtItemComponent;
  let fixture: ComponentFixture<EidtItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EidtItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EidtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
